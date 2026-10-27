import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Maximize2, Minimize2, RotateCcw, AlertCircle, X, Move } from 'lucide-react';

export type ModelType = 'machine' | 'scan';

interface Hero3DViewerCardProps {
  type: ModelType;
  title: string;
  badge: string;
  subtext: string;
  tagLeft: string;
  tagRight: string;
  className?: string;
}

export const Hero3DViewerCard: React.FC<Hero3DViewerCardProps> = ({
  type,
  title,
  badge,
  subtext,
  tagLeft,
  tagRight,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const fullscreenMountRef = useRef<HTMLDivElement>(null);

  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const secondaryGroupRef = useRef<THREE.Group | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Interaction State
  const isDraggingRef = useRef<boolean>(false);
  const prevPointerPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const userInteractedTimeoutRef = useRef<number | null>(null);
  const isUserInteractingRef = useRef<boolean>(false);

  // Default camera & orientation config
  const defaultRotation = type === 'machine' ? { x: 0.15, y: -0.4 } : { x: 0.2, y: 0.4 };
  const defaultZoom = type === 'machine' ? 4.2 : 3.8;

  // 1. Build Model: CBCT Machine
  const buildScannerModel = (): THREE.Group => {
    const root = new THREE.Group();

    const offWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf5f3ee,
      roughness: 0.35,
      metalness: 0.1,
    });
    const darkSlateMat = new THREE.MeshStandardMaterial({
      color: 0x22262a,
      roughness: 0.45,
      metalness: 0.25,
    });
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xd8dde2,
      roughness: 0.2,
      metalness: 0.85,
    });
    const indicatorMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.85,
    });

    // Base
    const baseGeo = new THREE.BoxGeometry(0.8, 0.08, 0.6);
    const base = new THREE.Mesh(baseGeo, offWhiteMat);
    base.position.set(0, 0.04, 0);
    root.add(base);

    // Column
    const colGeo = new THREE.BoxGeometry(0.34, 2.2, 0.28);
    const col = new THREE.Mesh(colGeo, offWhiteMat);
    col.position.set(0, 1.15, -0.2);
    root.add(col);

    const spineGeo = new THREE.BoxGeometry(0.12, 2.3, 0.05);
    const spine = new THREE.Mesh(spineGeo, darkSlateMat);
    spine.position.set(0, 1.2, -0.35);
    root.add(spine);

    // Overhead arm
    const topArmGeo = new THREE.BoxGeometry(0.3, 0.22, 0.85);
    const topArm = new THREE.Mesh(topArmGeo, offWhiteMat);
    topArm.position.set(0, 2.25, 0.18);
    root.add(topArm);

    // Gantry assembly
    const gantry = new THREE.Group();
    gantry.position.set(0, 1.9, 0.45);

    const bridgeGeo = new THREE.BoxGeometry(0.22, 0.14, 0.8);
    const bridge = new THREE.Mesh(bridgeGeo, offWhiteMat);
    bridge.position.set(0, 0.22, 0);
    gantry.add(bridge);

    // Tube housing
    const tubeGeo = new THREE.BoxGeometry(0.24, 0.5, 0.22);
    const tube = new THREE.Mesh(tubeGeo, darkSlateMat);
    tube.position.set(0, -0.05, -0.38);
    const coneGeo = new THREE.CylinderGeometry(0.06, 0.09, 0.1, 16);
    const cone = new THREE.Mesh(coneGeo, chromeMat);
    cone.rotation.x = Math.PI / 2;
    cone.position.set(0, -0.05, -0.24);
    tube.add(cone);
    gantry.add(tube);

    // Detector housing
    const detectorGeo = new THREE.BoxGeometry(0.2, 0.45, 0.14);
    const detector = new THREE.Mesh(detectorGeo, offWhiteMat);
    detector.position.set(0, -0.05, 0.38);
    const detectorFaceGeo = new THREE.BoxGeometry(0.18, 0.32, 0.02);
    const detectorFace = new THREE.Mesh(detectorFaceGeo, darkSlateMat);
    detectorFace.position.set(0, 0, -0.08);
    detector.add(detectorFace);
    gantry.add(detector);

    // Laser beam indicator
    const beamGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.6, 8);
    const beam = new THREE.Mesh(beamGeo, indicatorMat);
    beam.rotation.x = Math.PI / 2;
    beam.position.set(0, -0.05, 0);
    gantry.add(beam);

    root.add(gantry);
    secondaryGroupRef.current = gantry; // For gantry rotation

    // Patient chin support & handles
    const chinPostGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 10);
    const chinPost = new THREE.Mesh(chinPostGeo, chromeMat);
    chinPost.position.set(0, 1.45, 0.45);
    const chinCupGeo = new THREE.BoxGeometry(0.08, 0.02, 0.06);
    const chinCup = new THREE.Mesh(chinCupGeo, darkSlateMat);
    chinCup.position.set(0, 1.56, 0.45);
    root.add(chinPost, chinCup);

    // Lateral stabilizer bars
    const templeGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.24, 8);
    const templeL = new THREE.Mesh(templeGeo, chromeMat);
    templeL.position.set(-0.14, 1.62, 0.45);
    const templeR = new THREE.Mesh(templeGeo, chromeMat);
    templeR.position.set(0.14, 1.62, 0.45);
    root.add(templeL, templeR);

    // Center pivot
    root.position.set(0, -1.15, 0);
    return root;
  };

  // 2. Build Model: 3D Dental Scan (Mandibular Arch with Teeth, Roots, and Cortical Bone)
  const buildDentalScanModel = (): THREE.Group => {
    const root = new THREE.Group();

    // Materials: Bone tone, enamel ivory, and canal nerve gold/amber
    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xdec8b2,
      roughness: 0.45,
      metalness: 0.05,
    });
    const toothMat = new THREE.MeshStandardMaterial({
      color: 0xfbf8f3,
      roughness: 0.25,
      metalness: 0.1,
    });
    const nerveMat = new THREE.MeshStandardMaterial({
      color: 0xeab308,
      emissive: 0x854d0e,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.4,
    });

    // 1. Mandible Bone Arch (Parametric U-curve with thickness)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.95, -0.15, -0.65),
      new THREE.Vector3(-0.75, -0.25, -0.1),
      new THREE.Vector3(-0.45, -0.35, 0.45),
      new THREE.Vector3(0, -0.38, 0.65),
      new THREE.Vector3(0.45, -0.35, 0.45),
      new THREE.Vector3(0.75, -0.25, -0.1),
      new THREE.Vector3(0.95, -0.15, -0.65),
    ]);

    const boneTubeGeo = new THREE.TubeGeometry(curve, 36, 0.22, 16, false);
    const boneArch = new THREE.Mesh(boneTubeGeo, boneMat);
    root.add(boneArch);

    // 2. Mandibular Canal / Nerve Pathway (Glowing canal through the jaw)
    const nerveCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.85, -0.1, -0.55),
      new THREE.Vector3(-0.65, -0.28, -0.05),
      new THREE.Vector3(-0.35, -0.38, 0.35),
      new THREE.Vector3(0, -0.4, 0.48),
      new THREE.Vector3(0.35, -0.38, 0.35),
      new THREE.Vector3(0.65, -0.28, -0.05),
      new THREE.Vector3(0.85, -0.1, -0.55),
    ]);
    const nerveTubeGeo = new THREE.TubeGeometry(nerveCurve, 28, 0.035, 10, false);
    const nerveMesh = new THREE.Mesh(nerveTubeGeo, nerveMat);
    root.add(nerveMesh);

    // 3. Teeth Array along the ridge
    const teethCount = 14;
    for (let i = 0; i < teethCount; i++) {
      const t = 0.08 + (i / (teethCount - 1)) * 0.84;
      const point = curve.getPoint(t);
      const tangent = curve.getTangent(t);

      const toothGroup = new THREE.Group();
      toothGroup.position.copy(point);

      // Crown geometry (Molar vs Incisor based on position)
      const isMolar = i < 3 || i > 10;
      const crownGeo = isMolar
        ? new THREE.BoxGeometry(0.16, 0.16, 0.15)
        : new THREE.BoxGeometry(0.1, 0.18, 0.09);
      const crown = new THREE.Mesh(crownGeo, toothMat);
      crown.position.set(0, 0.22, 0);
      toothGroup.add(crown);

      // Root anatomy embedded into bone
      const rootGeo = isMolar
        ? new THREE.ConeGeometry(0.06, 0.26, 8)
        : new THREE.ConeGeometry(0.045, 0.24, 8);
      const rootMesh = new THREE.Mesh(rootGeo, toothMat);
      rootMesh.rotation.x = Math.PI;
      rootMesh.position.set(0, 0.06, 0);
      toothGroup.add(rootMesh);

      // Orient tooth outward
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
      toothGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);

      root.add(toothGroup);
    }

    // 4. Subtle holographic measurement grid ring
    const gridHelper = new THREE.PolarGridHelper(1.3, 10, 4, 24, 0xc5a880, 0x3e322a);
    gridHelper.position.set(0, -0.55, 0);
    root.add(gridHelper);

    root.position.set(0, 0.05, 0);
    return root;
  };

  // Setup Three.js Scene
  const initScene = useCallback((targetEl: HTMLDivElement) => {
    // Check WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
        setIsLoading(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      setIsLoading(false);
      return;
    }

    const width = targetEl.clientWidth || 300;
    const height = targetEl.clientHeight || 300;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x16120f);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, defaultZoom);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    targetEl.appendChild(renderer.domElement);

    // Warm clinical studio lights
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffedd5, 2.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc5a880, 1.6);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0x93c5fd, 1.2);
    topLight.position.set(0, 5, -2);
    scene.add(topLight);

    // Build Model
    const model = type === 'machine' ? buildScannerModel() : buildDentalScanModel();
    model.rotation.x = defaultRotation.x;
    model.rotation.y = defaultRotation.y;
    modelGroupRef.current = model;
    scene.add(model);

    setIsLoading(false);

    // Animation Loop
    let idleAngle = 0;
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      // Gantry secondary rotation for machine
      if (secondaryGroupRef.current) {
        secondaryGroupRef.current.rotation.y += 0.01;
      }

      // Auto-rotation if user is not actively interacting
      if (!isUserInteractingRef.current && modelGroupRef.current) {
        idleAngle += 0.003;
        modelGroupRef.current.rotation.y += 0.004;
      }

      renderer.render(scene, camera);
    };
    animate();
  }, [type]);

  // Teardown Scene
  const destroyScene = useCallback((targetEl: HTMLDivElement | null) => {
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }
    if (rendererRef.current) {
      if (targetEl && rendererRef.current.domElement && targetEl.contains(rendererRef.current.domElement)) {
        targetEl.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current.dispose();
      rendererRef.current = null;
    }
    if (sceneRef.current) {
      sceneRef.current.traverse((obj) => {
        if ((obj as THREE.Mesh).geometry) {
          (obj as THREE.Mesh).geometry.dispose();
        }
        if ((obj as THREE.Mesh).material) {
          const mat = (obj as THREE.Mesh).material;
          if (Array.isArray(mat)) {
            mat.forEach((m) => m.dispose());
          } else {
            mat.dispose();
          }
        }
      });
      sceneRef.current = null;
    }
    modelGroupRef.current = null;
    secondaryGroupRef.current = null;
  }, []);

  // Mount/Unmount effect
  useEffect(() => {
    const el = isFullscreen ? fullscreenMountRef.current : mountRef.current;
    if (el) {
      initScene(el);
    }

    const handleResize = () => {
      const activeEl = isFullscreen ? fullscreenMountRef.current : mountRef.current;
      if (!activeEl || !cameraRef.current || !rendererRef.current) return;
      const w = activeEl.clientWidth;
      const h = activeEl.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      destroyScene(el);
    };
  }, [isFullscreen, initScene, destroyScene]);

  // Pointer Interaction Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    isUserInteractingRef.current = true;
    prevPointerPosRef.current = { x: e.clientX, y: e.clientY };
    if (userInteractedTimeoutRef.current) clearTimeout(userInteractedTimeoutRef.current);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !modelGroupRef.current) return;
    const deltaX = e.clientX - prevPointerPosRef.current.x;
    const deltaY = e.clientY - prevPointerPosRef.current.y;

    modelGroupRef.current.rotation.y += deltaX * 0.008;
    modelGroupRef.current.rotation.x = Math.max(
      -0.6,
      Math.min(0.8, modelGroupRef.current.rotation.x + deltaY * 0.008)
    );

    prevPointerPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
    // Resume auto-rotation after 2 seconds of inactivity
    userInteractedTimeoutRef.current = window.setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 2000);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!cameraRef.current) return;
    e.preventDefault();
    isUserInteractingRef.current = true;
    const zoomDelta = e.deltaY * 0.003;
    const minZoom = type === 'machine' ? 2.6 : 2.2;
    const maxZoom = type === 'machine' ? 6.5 : 5.8;
    cameraRef.current.position.z = Math.max(minZoom, Math.min(maxZoom, cameraRef.current.position.z + zoomDelta));

    if (userInteractedTimeoutRef.current) clearTimeout(userInteractedTimeoutRef.current);
    userInteractedTimeoutRef.current = window.setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 2000);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modelGroupRef.current) {
      modelGroupRef.current.rotation.x = defaultRotation.x;
      modelGroupRef.current.rotation.y = defaultRotation.y;
    }
    if (cameraRef.current) {
      cameraRef.current.position.z = defaultZoom;
    }
    isUserInteractingRef.current = false;
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen((prev) => !prev);
  };

  return (
    <>
      {/* Standard In-Card Viewer Container */}
      <div
        ref={containerRef}
        className={`relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#29201a] via-[#1e1713] to-[#140f0c] border border-[#3e322a]/90 flex flex-col justify-between p-4 sm:p-5 text-left group shadow-lg ${className}`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between z-10 pointer-events-none">
          <span className="text-[10px] font-mono tracking-widest text-[#E8D8C4]/80 uppercase px-2.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm">
            {badge}
          </span>
          <div className="flex items-center gap-1.5 pointer-events-auto">
            <button
              type="button"
              onClick={handleReset}
              className="w-7 h-7 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-[#181310] border border-white/10 flex items-center justify-center transition-all cursor-pointer"
              title="Reset 3D View"
              aria-label="Reset 3D model orientation"
            >
              <RotateCcw size={12} />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="w-7 h-7 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-[#181310] border border-white/10 flex items-center justify-center transition-all cursor-pointer"
              title="Expand to Fullscreen"
              aria-label="Expand 3D model to full-screen view"
            >
              <Maximize2 size={12} />
            </button>
          </div>
        </div>

        {/* 3D Canvas Area */}
        <div
          ref={mountRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onWheel={handleWheel}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing touch-none select-none"
          role="region"
          aria-label={`Interactive 3D ${title}. Drag to rotate 360 degrees, scroll to zoom.`}
        >
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#181310] z-20">
              <div className="w-8 h-8 rounded-full border-2 border-[#C5A880] border-t-transparent animate-spin mb-2" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#E8D8C4]/70">
                Loading 3D Model...
              </span>
            </div>
          )}

          {/* WebGL Unsupported Fallback */}
          {!webGlSupported && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#181310] z-20">
              <AlertCircle size={28} className="text-[#C5A880] mb-2" />
              <p className="text-xs text-[#FAF8F5] font-serif mb-1">3D Graphics Unavailable</p>
              <p className="text-[10px] text-[#E8D8C4]/60">Requires WebGL acceleration.</p>
            </div>
          )}
        </div>

        {/* Mid-overlay interaction hint */}
        <div className="absolute bottom-16 left-4 right-4 flex items-center justify-between z-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#E8D8C4]/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Move size={10} className="text-[#C5A880]" />
            <span>Drag &bull; 360&deg;</span>
          </span>
          <span className="text-[10px] font-mono text-[#E8D8C4]/70 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
            Scroll Zoom
          </span>
        </div>

        {/* Card Footer Caption */}
        <div className="z-10 pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#E8D8C4]/80 bg-gradient-to-t from-[#140f0c]/90 via-[#140f0c]/60 to-transparent -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-4 sm:p-5 pointer-events-none">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-xs text-[#FAF8F5] font-medium">
                {title}
              </span>
              <span className="text-[10px] text-[#C5A880]/80 font-mono">
                &bull; {tagLeft}
              </span>
            </div>
            <span className="text-[10px] text-[#E8D8C4]/60 font-light block line-clamp-1">
              {subtext}
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#C5A880] shrink-0 font-medium ml-2">
            {tagRight}
          </span>
        </div>
      </div>

      {/* Full-Screen Immersive Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg animate-fadeIn p-4 sm:p-8">
          <div className="relative w-full h-full max-w-5xl max-h-[85vh] bg-[#16120f] border border-[#3e322a] rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40 z-20">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block mb-1">
                  IMMERSIVE 3D VIEWER &middot; {badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#FAF8F5]">
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#C5A880] text-white hover:text-[#181310] border border-white/15 text-xs font-medium tracking-wide flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Reset 3D Model View"
                >
                  <RotateCcw size={12} />
                  <span>Reset Orientation</span>
                </button>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500/20 text-white hover:text-red-300 border border-white/15 flex items-center justify-center transition-all cursor-pointer"
                  title="Close Fullscreen"
                  aria-label="Close full-screen 3D viewer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal 3D Mount Area */}
            <div
              ref={fullscreenMountRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onWheel={handleWheel}
              className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing touch-none select-none overflow-hidden"
              role="region"
              aria-label={`Full-screen interactive 3D ${title}. Drag to rotate, mouse wheel to zoom.`}
            >
              {/* Interaction instructions */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 z-10 pointer-events-none">
                <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-[#FAF8F5]">
                  <Move size={14} className="text-[#C5A880]" />
                  <span>Click and drag with mouse or touch to rotate 360&deg;</span>
                </div>
                <div className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-[#E8D8C4]/80">
                  Scroll mouse wheel or pinch to zoom
                </div>
              </div>
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs text-[#E8D8C4]/80 z-20">
              <p className="max-w-2xl font-light">
                {subtext}
              </p>
              <button
                type="button"
                onClick={toggleFullscreen}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C5A880] hover:text-white transition-colors cursor-pointer"
              >
                <Minimize2 size={14} />
                <span>Exit Fullscreen</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero3DViewerCard;
