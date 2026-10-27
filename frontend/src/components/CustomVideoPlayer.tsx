import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Loader2, AlertCircle } from 'lucide-react';

interface CustomVideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  ariaLabel?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const CustomVideoPlayer = ({
  videoUrl,
  posterUrl,
  ariaLabel = 'Video player',
  className = '',
  aspectRatioClass = 'aspect-[9/16]'
}: CustomVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  // Sync fullscreen change events across standard and vendor prefixes
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

  // Handle Play/Pause independently
  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.paused) {
      vid
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Playback request failed or prevented:', err);
          setIsPlaying(false);
        });
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  // Handle Mute/Unmute without disrupting playback
  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;

    const nextMuted = !vid.muted;
    vid.muted = nextMuted;
    setIsMuted(nextMuted);

    // If unmuting while playing, keep playing
    if (!nextMuted && vid.paused && isPlaying) {
      vid.play().catch(() => {});
    }
  };

  // Handle Fullscreen on container (maintains natural aspect ratio centered on dark backdrop)
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
      className={`group/custom-player select-none transition-all duration-300 relative w-full ${
        isFullscreen
          ? 'fixed inset-0 w-screen h-screen z-[9999] bg-black flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden rounded-none border-0'
          : `rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-[#3E322A]/80 shadow-[0_12px_36px_rgba(33,26,22,0.18)] ${aspectRatioClass} ${className}`
      }`}
    >
      {/* Inner wrapper preserving natural ratio in fullscreen */}
      <div
        className={`relative flex items-center justify-center overflow-hidden w-full h-full ${
          isFullscreen ? `h-full max-h-full ${aspectRatioClass} w-auto max-w-full rounded-2xl shadow-2xl bg-black border border-white/10` : ''
        }`}
      >
        {/* HTML5 Video Element */}
        {!hasError ? (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            muted={isMuted}
            playsInline
            preload="metadata"
            onWaiting={() => setIsLoading(true)}
            onLoadedData={() => setIsLoading(false)}
            onCanPlay={() => setIsLoading(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            onClick={togglePlay}
            className="w-full h-full object-contain object-center cursor-pointer bg-black"
            aria-label={ariaLabel}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-[#FAF8F5]/70 p-6 text-center bg-[#171310]">
            <AlertCircle size={32} className="text-[#C5A880] mb-3" />
            <p className="text-sm font-medium text-[#FAF8F5]">Video temporarily unavailable</p>
            <p className="text-xs text-[#FAF8F5]/60 mt-1">Please try refreshing or check connection.</p>
          </div>
        )}

        {/* Loading Indicator */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] pointer-events-none z-15">
            <Loader2 size={32} className="text-[#C5A880] animate-spin" />
          </div>
        )}

        {/* Centered Play Trigger when Paused */}
        {!isPlaying && !isLoading && !hasError && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play video"
            className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/50 hover:bg-[#C5A880] text-[#FAF8F5] hover:text-[#211A16] border border-white/30 hover:border-[#C5A880] backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 z-20 cursor-pointer"
          >
            <Play size={26} className="fill-current ml-1" />
          </button>
        )}

        {/* Bottom shadow vignette for contrast behind controls */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-20" />

        {/* 
          Compact, Dark Semi-Transparent Control Bar Near Bottom
          Contains: Play/Pause, Mute/Unmute, and Fullscreen
        */}
        <div
          className={`absolute inset-x-0 flex items-center justify-center z-30 px-4 transition-all duration-300 ${
            isFullscreen
              ? 'bottom-6 opacity-100'
              : 'bottom-4 opacity-95 sm:opacity-0 sm:group-hover/custom-player:opacity-100 focus-within:opacity-100'
          }`}
          role="toolbar"
          aria-label={`${ariaLabel} playback controls`}
        >
          <div className="flex items-center gap-2.5 bg-[#1A1A1A]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-2xl">
            {/* 1. Play / Pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause video' : 'Play video'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
            >
              {isPlaying ? (
                <Pause size={14} className="fill-white" />
              ) : (
                <Play size={14} className="fill-white translate-x-0.5" />
              )}
            </button>

            {/* 2. Mute / Unmute */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              title={isMuted ? 'Unmute video' : 'Mute video'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            {/* 3. Fullscreen / Exit Fullscreen */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'}
              title={isFullscreen ? 'Exit full screen' : 'Full screen'}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
            >
              {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
