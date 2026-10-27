import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RotateCcw, Move, AlertCircle } from 'lucide-react';

interface InteractiveCbctScannerProps {
  className?: string;
}

export const InteractiveCbctScanner = ({ className = '' }: InteractiveCbctScannerProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const gantryRef = useRef<THREE.Group | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Interaction State
  const isDraggingRef = useRef<boolean>(false);
  const prevMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);

  // Default camera/rotation values for Reset
  const defaultRotation = { x: 0.15, y: -0.45 };
  const defaultZoom = 5.2;

  // Build the stylized, recognizable dental CBCT machine model
  const buildScannerModel = (): THREE.Group => {
    const root = new THREE.Group();

    // Palette: Off-white medical casing, dark slate accents, metallic chrome joints, subtle teal beam indicator
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
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.5,
    });
    const indicatorMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.8,
    });

    // 1. Stable Floor Base (Horseshoe / U-Shape design)
    const baseGroup = new THREE.Group();
    const baseCenterGeo = new THREE.BoxGeometry(0.8, 0.08, 0.6);
    const baseCenter = new THREE.Mesh(baseCenterGeo, offWhiteMat);
    baseCenter.position.set(0, 0.04, 0);
    baseGroup.add(baseCenter);

    const baseLegGeo = new THREE.BoxGeometry(0.18, 0.08, 0.9);
    const baseLeftLeg = new THREE.Mesh(baseLegGeo, offWhiteMat);
    baseLeftLeg.position.set(-0.4, 0.04, 0.35);
    const baseRightLeg = new THREE.Mesh(baseLegGeo, offWhiteMat);
    baseRightLeg.position.set(0.4, 0.04, 0.35);
    baseGroup.add(baseLeftLeg, baseRightLeg);

    // Dark foot pads
    const padGeo = new THREE.BoxGeometry(0.19, 0.015, 0.3);
    const padL = new THREE.Mesh(padGeo, darkSlateMat);
    padL.position.set(-0.4, 0.085, 0.5);
    const padR = new THREE.Mesh(padGeo, darkSlateMat);
    padR.position.set(0.4, 0.085, 0.5);
    baseGroup.add(padL, padR);

    root.add(baseGroup);

    // 2. Main Upright Telescopic Column
    const columnGroup = new THREE.Group();
    // Lower outer column
    const lowerColGeo = new THREE.BoxGeometry(0.38, 1.8, 0.32);
    const lowerCol = new THREE.Mesh(lowerColGeo, offWhiteMat);
    lowerCol.position.set(0, 0.95, -0.2);
    columnGroup.add(lowerCol);

    // Dark rear accent spine
    const spineGeo = new THREE.BoxGeometry(0.14, 2.7, 0.06);
    const spine = new THREE.Mesh(spineGeo, darkSlateMat);
    spine.position.set(0, 1.4, -0.36);
    columnGroup.add(spine);

    // Upper extending column section
    const upperColGeo = new THREE.BoxGeometry(0.32, 1.4, 0.28);
    const upperCol = new THREE.Mesh(upperColGeo, chromeMat);
    upperCol.position.set(0, 2.0, -0.2);
    columnGroup.add(upperCol);

    root.add(columnGroup);

    // 3. Overhead Cantilever Arm Support
    const topArmGeo = new THREE.BoxGeometry(0.36, 0.28, 0.95);
    const topArm = new THREE.Mesh(topArmGeo, offWhiteMat);
    topArm.position.set(0, 2.82, 0.2);
    root.add(topArm);

    // Rotating C-Arm / Gantry Pivot Ring Housing
    const pivotHousingGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.25, 24);
    const pivotHousing = new THREE.Mesh(pivotHousingGeo, darkSlateMat);
    pivotHousing.position.set(0, 2.7, 0.55);
    root.add(pivotHousing);

    // 4. Rotating Scanner C-Arm / Gantry Assembly
    const gantry = new THREE.Group();
    gantry.position.set(0, 2.35, 0.55);

    // Upper bridge of the C-arm
    const cBridgeGeo = new THREE.BoxGeometry(0.26, 0.18, 0.85);
    const cBridge = new THREE.Mesh(cBridgeGeo, offWhiteMat);
    cBridge.position.set(0, 0.28, 0);
    gantry.add(cBridge);

    // Left Arm (X-Ray Tube Source Housing)
    const tubeHousingGeo = new THREE.BoxGeometry(0.28, 0.6, 0.26);
    const tubeHousing = new THREE.Mesh(tubeHousingGeo, darkSlateMat);
    tubeHousing.position.set(0, -0.05, -0.42);
    // Tube cone snout
    const coneSnoutGeo = new THREE.CylinderGeometry(0.08, 0.11, 0.12, 16);
    const coneSnout = new THREE.Mesh(coneSnoutGeo, chromeMat);
    coneSnout.rotation.x = Math.PI / 2;
    coneSnout.position.set(0, -0.05, -0.26);
    tubeHousing.add(coneSnout);
    gantry.add(tubeHousing);

    // Right Arm (Flat Panel Detector / Sensor Housing)
    const detectorHousingGeo = new THREE.BoxGeometry(0.24, 0.55, 0.16);
    const detectorHousing = new THREE.Mesh(detectorHousingGeo, offWhiteMat);
    detectorHousing.position.set(0, -0.05, 0.42);
    // Flat detector panel face
    const detectorFaceGeo = new THREE.BoxGeometry(0.2, 0.36, 0.02);
    const detectorFace = new THREE.Mesh(detectorFaceGeo, darkSlateMat);
    detectorFace.position.set(0, 0, -0.09);
    detectorHousing.add(detectorFace);
    gantry.add(detectorHousing);

    // Subtle Cyan alignment laser line indicator between tube and detector
    const beamLineGeo = new THREE.CylinderGeometry(0.006, 0.006, 0.65, 8);
    const beamLine = new THREE.Mesh(beamLineGeo, indicatorMat);
    beamLine.rotation.x = Math.PI / 2;
    beamLine.position.set(0, -0.05, 0);
    gantry.add(beamLine);

    root.add(gantry);
    gantryRef.current = gantry;

    // 5. Patient Positioning Module (Temple Clamps, Chin Rest, Hand Grips)
    const patientSupportGroup = new THREE.Group();
    patientSupportGroup.position.set(0, 1.75, 0.55);

    // Central support arm extending forward from column
    const supportArmGeo = new THREE.BoxGeometry(0.18, 0.14, 0.65);
    const supportArm = new THREE.Mesh(supportArmGeo, offWhiteMat);
    supportArm.position.set(0, 0, -0.3);
    patientSupportGroup.add(supportArm);

    // Horizontal table console
    const consoleGeo = new THREE.BoxGeometry(0.48, 0.08, 0.3);
    const consoleMesh = new THREE.Mesh(consoleGeo, offWhiteMat);
    consoleMesh.position.set(0, 0, 0);
    patientSupportGroup.add(consoleMesh);

    // Chin rest post & cup
    const chinPostGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.15, 12);
    const chinPost = new THREE.Mesh(chinPostGeo, chromeMat);
    chinPost.position.set(0, 0.08, 0);
    const chinCupGeo = new THREE.BoxGeometry(0.1, 0.02, 0.08);
    const chinCup = new THREE.Mesh(chinCupGeo, darkSlateMat);
    chinCup.position.set(0, 0.16, 0);
    patientSupportGroup.add(chinPost, chinCup);

    // Lateral temple/head stabilizer rods
    const templeBarGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.28, 10);
    const templeL = new THREE.Mesh(templeBarGeo, chromeMat);
    templeL.position.set(-0.16, 0.22, 0);
    const templeR = new THREE.Mesh(templeBarGeo, chromeMat);
    templeR.position.set(0.16, 0.22, 0);
    patientSupportGroup.add(templeL, templeR);

    // Patient ergonomic hand grips
    const gripGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.22, 12);
    const gripL = new THREE.Mesh(gripGeo, darkSlateMat);
    gripL.position.set(-0.22, -0.1, 0.08);
    gripL.rotation.z = 0.15;
    const gripR = new THREE.Mesh(gripGeo, darkSlateMat);
    gripR.position.set(0.22, -0.1, 0.08);
    gripR.rotation.z = -0.15;
    patientSupportGroup.add(gripL, gripR);

    // 6. Integrated Touchscreen Control Interface
    const screenArmGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.16, 12);
    const screenArm = new THREE.Mesh(screenArmGeo, chromeMat);
    screenArm.rotation.z = Math.PI / 4;
    screenArm.position.set(0.3, -0.08, 0);
    const screenBezelGeo = new THREE.BoxGeometry(0.24, 0.18, 0.025);
    const screenBezel = new THREE.Mesh(screenBezelGeo, darkSlateMat);
    screenBezel.position.set(0.42, -0.12, 0.05);
    screenBezel.rotation.y = -0.35;
    screenBezel.rotation.x = -0.2;
    // Screen display panel
    const screenDisplayGeo = new THREE.BoxGeometry(0.2, 0.14, 0.005);
    const screenDisplay = new THREE.Mesh(screenDisplayGeo, screenMat);
    screenDisplay.position.set(0, 0, 0.015);
    screenBezel.add(screenDisplay);
    patientSupportGroup.add(screenArm, screenBezel);

    root.add(patientSupportGroup);

    // Center pivot vertically
    root.position.set(0, -1.4, 0);

    return root;
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect WebGL capability safely
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 520;

    // Scene & Background (Matches website dark espresso card theme)
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x181310);

    // Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.3, defaultZoom);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = false;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Lighting (Warm editorial studio illumination)
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.2);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xfffbeb, 2.4);
    mainKeyLight.position.set(4, 5, 5);
    scene.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0xc5a880, 1.0);
    fillLight.position.set(-4, 2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x93c5fd, 1.5);
    rimLight.position.set(0, 6, -4);
    scene.add(rimLight);

    // Ground platform grid ring in 3D scene
    const gridHelper = new THREE.PolarGridHelper(1.8, 16, 8, 32, 0xc5a880, 0x332822);
    gridHelper.position.set(0, -1.38, 0);
    scene.add(gridHelper);

    // Scanner Model
    const model = buildScannerModel();
    model.rotation.x = defaultRotation.x;
    model.rotation.y = defaultRotation.y;
    modelGroupRef.current = model;
    scene.add(model);

    // Animation Loop (Gentle subtle idle auto-rotate when not dragging)
    let idleRotation = 0;
    const renderLoop = () => {
      animFrameIdRef.current = requestAnimationFrame(renderLoop);

      // Subtle slow gantry rotation simulating 3D scan trajectory
      if (gantryRef.current) {
        gantryRef.current.rotation.y += 0.008;
      }

      // Smooth idle rotation if user is not actively interacting
      if (!isDraggingRef.current && modelGroupRef.current) {
        idleRotation += 0.002;
        modelGroupRef.current.rotation.y = defaultRotation.y + Math.sin(idleRotation) * 0.35;
      }

      renderer.render(scene, camera);
    };
    renderLoop();

    // Handle Window Resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup resources on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      if (rendererRef.current && rendererRef.current.domElement) {
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
      }
      // Recursively dispose geometries and materials
      scene.traverse((obj) => {
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
    };
  }, []);

  // Mouse & Touch Controls (Rotate & Zoom)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !modelGroupRef.current) return;
    const deltaX = e.clientX - prevMousePosRef.current.x;
    const deltaY = e.clientY - prevMousePosRef.current.y;

    // Apply rotation with clamping on vertical tilt
    modelGroupRef.current.rotation.y += deltaX * 0.008;
    modelGroupRef.current.rotation.x = Math.max(
      -0.35,
      Math.min(0.55, modelGroupRef.current.rotation.x + deltaY * 0.008)
    );

    prevMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if already released
    }
  };

  // Wheel Zoom with clamped boundary
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!cameraRef.current) return;
    e.preventDefault();
    const zoomDelta = e.deltaY * 0.003;
    const newZ = Math.max(3.8, Math.min(7.0, cameraRef.current.position.z + zoomDelta));
    cameraRef.current.position.z = newZ;
  };

  // Reset View Action
  const handleReset = useCallback(() => {
    if (modelGroupRef.current) {
      modelGroupRef.current.rotation.x = defaultRotation.x;
      modelGroupRef.current.rotation.y = defaultRotation.y;
    }
    if (cameraRef.current) {
      cameraRef.current.position.z = defaultZoom;
    }
  }, []);

  return (
    <div className={`relative w-full h-full flex flex-col justify-between ${className}`}>
      {/* 3D Canvas Mount Area */}
      {webGlSupported ? (
        <div
          ref={mountRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onWheel={onWheel}
          className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] lg:h-[540px] cursor-grab active:cursor-grabbing touch-none select-none overflow-hidden rounded-2xl"
          role="region"
          aria-label="Interactive 3D dental CBCT scanner model. Drag with pointer or touch to rotate horizontally and vertically."
        >
          {/* Top Floating Control Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 text-[11px] font-mono tracking-wider uppercase">
              <Move size={12} className="text-[#C5A880]" />
              <span>Drag to Rotate 3D</span>
            </div>

            {/* Reset View Button */}
            <button
              type="button"
              onClick={handleReset}
              className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-[#C5A880] text-white hover:text-[#181310] border border-white/15 hover:border-[#C5A880] backdrop-blur-md text-xs font-medium tracking-wide transition-all duration-300 shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              title="Reset 3D Scanner View"
              aria-label="Reset 3D scanner view to default orientation"
            >
              <RotateCcw size={12} />
              <span>Reset View</span>
            </button>
          </div>

          {/* Bottom Floating Interaction Hint & Gantry Status */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none text-[11px] text-[#E8D8C4]/70">
            <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/5">
              Scroll to Zoom
            </span>
            <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
              <span>Gantry Orbit Active</span>
            </span>
          </div>
        </div>
      ) : (
        /* Fallback if WebGL is disabled or unavailable */
        <div className="w-full h-[400px] sm:h-[460px] md:h-[500px] lg:h-[540px] flex flex-col items-center justify-center p-6 text-center bg-[#181310] rounded-2xl border border-white/10">
          <AlertCircle size={36} className="text-[#C5A880] mb-3" />
          <h4 className="text-lg font-serif text-[#FAF8F5] mb-2">3D Graphic Acceleration Unavailable</h4>
          <p className="text-xs text-[#E8D8C4]/70 max-w-sm">
            Interactive 3D viewing requires WebGL enabled in your browser. You can inspect the high-resolution 2D equipment photograph on the left.
          </p>
        </div>
      )}
    </div>
  );
};

export default InteractiveCbctScanner;
