import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface DoctorVideoPlayerProps {
  videoUrl: string;
  fallbackPosterUrl: string;
}

export const DoctorVideoPlayer = ({ videoUrl, fallbackPosterUrl }: DoctorVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Sync fullscreen change events across standard and webkit prefixes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const activeElement =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement;

      setIsFullscreen(activeElement === containerRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Handle Play/Pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Handle Mute/Unmute
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    // If unmuting, ensure it continues playing
    if (!nextMuted && video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Handle Fullscreen on the container (preserving 9:16 portrait video inside)
  const toggleFullscreen = useCallback(async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const isCurrentlyFullscreen =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement;

      if (!isCurrentlyFullscreen) {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if ((container as any).webkitRequestFullscreen) {
          await (container as any).webkitRequestFullscreen();
        } else if ((container as any).mozRequestFullScreen) {
          await (container as any).mozRequestFullScreen();
        } else if ((container as any).msRequestFullscreen) {
          await (container as any).msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen toggle failed:', err);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`group/video select-none transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 w-screen h-screen z-[9999] bg-black flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden rounded-none border-0'
          : 'relative aspect-[3/4] w-full rounded-t-[130px] rounded-b-2xl overflow-hidden border border-border/80 bg-background-secondary shadow-xl flex items-end justify-center'
      }`}
    >
      {/* 
        Inner Video Wrapper:
        When in fullscreen, this inner wrapper forces an exact 9:16 portrait aspect ratio
        centered inside the black container, scaled to fit max-height (100%) and max-width (100%).
        When inline, it fills the aspect-[3/4] container.
      */}
      <div
        className={`relative flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isFullscreen
            ? 'h-full max-h-full aspect-[9/16] w-auto max-w-full rounded-2xl shadow-2xl bg-black border border-white/10'
            : 'w-full h-full rounded-t-[130px] rounded-b-2xl'
        }`}
      >
        {/* HTML5 Auto-playing Video Element */}
        {!hasError ? (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={fallbackPosterUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className={`w-full h-full object-cover object-center transform transition-transform duration-700 ${
              isFullscreen ? 'object-contain' : 'object-cover'
            }`}
          />
        ) : (
          <img
            src={fallbackPosterUrl}
            alt="Dr. Anchit Thukral"
            className="w-full h-full object-cover object-top"
          />
        )}

        {/* Subtle bottom shadow vignette for contrast behind controls */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10" />

        {/* Floating Custom Video Controls Overlay (Within video bounds near bottom) */}
        <div
          className={`absolute inset-x-0 flex items-center justify-center gap-3 z-20 px-4 transition-all duration-300 ${
            isFullscreen
              ? 'bottom-6 opacity-100'
              : 'bottom-5 opacity-90 sm:opacity-0 sm:group-hover/video:opacity-100 focus-within:opacity-100'
          }`}
          role="toolbar"
          aria-label="Video Controls"
        >
          <div className="flex items-center gap-2.5 bg-[#1A1A1A]/85 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
            {/* Play/Pause Control */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause video' : 'Play video'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isPlaying ? (
                <Pause size={14} className="fill-white" />
              ) : (
                <Play size={14} className="fill-white translate-x-0.5" />
              )}
            </button>

            {/* Mute/Unmute Control */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              title={isMuted ? 'Unmute video' : 'Mute video'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            {/* Fullscreen Control */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'}
              title={isFullscreen ? 'Exit full screen' : 'Full screen'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorVideoPlayer;
