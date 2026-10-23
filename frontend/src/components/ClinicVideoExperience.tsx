import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Sparkles, ArrowRight, Activity, Smile } from 'lucide-react';
import { useAppointmentModal } from '../context/AppointmentModalContext';

interface ClinicVideoExperienceProps {
  videoUrl: string;
  className?: string;
}

export const ClinicVideoExperience = ({ videoUrl, className = '' }: ClinicVideoExperienceProps) => {
  const { openModal } = useAppointmentModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // Sync fullscreen change events
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

    if (!nextMuted && video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Handle Fullscreen on container
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
    <>
      <div className={`relative w-full max-w-6xl mx-auto ${className}`}>
        {/* Decorative ambient aura behind the showcase */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-[2.5rem] blur-2xl -z-10 pointer-events-none opacity-70" />

        {/* Main Showcase Shell */}
        <div className="relative rounded-[2rem] border border-border bg-background shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* LEFT SIDE: Educational Video Context & Interactive Highlights */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6 text-left">
              
              {/* Top Eyebrow Badge with micro glow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase self-start shadow-sm transition-all duration-300 hover:bg-primary/10 hover:border-primary/40 hover:shadow-md cursor-default">
                <Sparkles size={13} className="text-primary animate-pulse" />
                <span>Doctor Insight • Clinical Guide</span>
              </div>

              {/* Section Heading & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-text leading-tight mb-3">
                  Why Timing Matters in <span className="italic font-light">Orthodontics</span>
                </h3>
                <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                  Watch Dr. Anchit Thukral break down the crucial stages of orthodontic intervention — explaining why identifying alignment needs during natural jaw growth leads to faster, more stable, and minimally invasive results.
                </p>
              </div>

              {/* Interactive Feature Highlights with subtle hover micro-effects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="group/pill flex items-start gap-3 p-3.5 rounded-xl border border-border/80 bg-background-secondary/60 hover:bg-background-secondary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/pill:bg-primary group-hover/pill:text-background transition-colors duration-300">
                    <Activity size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-text group-hover/pill:text-primary transition-colors">
                      Growth-Guided Timing
                    </h4>
                    <p className="text-[11px] sm:text-xs text-text-muted font-light leading-snug">
                      Treating during the optimal growth window
                    </p>
                  </div>
                </div>

                <div className="group/pill flex items-start gap-3 p-3.5 rounded-xl border border-border/80 bg-background-secondary/60 hover:bg-background-secondary hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/pill:bg-primary group-hover/pill:text-background transition-colors duration-300">
                    <Smile size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-text group-hover/pill:text-primary transition-colors">
                      Precision Aesthetics
                    </h4>
                    <p className="text-[11px] sm:text-xs text-text-muted font-light leading-snug">
                      Custom braces & modern alignment
                    </p>
                  </div>
                </div>
              </div>

              {/* Action CTA with Hover Arrow Animation */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="group btn-primary cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <span className="text-xs text-text-muted italic">
                  Orthodontic consultations available
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: Video Player Preview (Inline) */}
            <div className="w-full lg:w-1/2 flex justify-center">
              {/* Outer inline container */}
              <div className="relative w-full max-w-md sm:max-w-lg aspect-[9/16] max-h-[580px] rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-2xl bg-[#0D0D0D] flex items-center justify-center ring-1 ring-black/5">
                
                {/* Dedicated fullscreen target container */}
                <div
                  ref={containerRef}
                  className={`group/video select-none transition-all duration-300 ${
                    isFullscreen
                      ? 'fixed inset-0 w-screen h-screen z-[9999] bg-black flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden rounded-none border-0'
                      : 'w-full h-full relative flex items-center justify-center overflow-hidden'
                  }`}
                >
                  {/* Inner aspect ratio constraint wrapper for fullscreen & inline */}
                  <div
                    className={`relative flex items-center justify-center overflow-hidden transition-all duration-300 ${
                      isFullscreen
                        ? 'h-full max-h-full aspect-[9/16] w-auto max-w-full rounded-2xl shadow-2xl bg-black border border-white/10'
                        : 'w-full h-full'
                    }`}
                  >
                    {/* HTML5 Auto-playing Video Element */}
                    {!hasError ? (
                      <video
                        ref={videoRef}
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onError={() => setHasError(true)}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        className={`w-full h-full transform transition-transform duration-500 group-hover/video:scale-[1.01] ${
                          isFullscreen ? 'object-contain object-center' : 'object-cover object-center'
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-white/60 p-6 text-center">
                        <p className="text-sm">Video temporarily unavailable.</p>
                      </div>
                    )}

                    {/* Bottom shadow vignette for controls contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none z-10" />

                    {/* Floating Custom Video Controls Overlay (matching PatientVideoPlayer and DoctorVideoPlayer) */}
                    <div
                      className={`absolute inset-x-0 flex items-center justify-center gap-3 z-20 px-4 transition-all duration-300 ${
                        isFullscreen
                          ? 'bottom-6 opacity-100'
                          : 'bottom-5 opacity-90 sm:opacity-0 sm:group-hover/video:opacity-100 focus-within:opacity-100'
                      }`}
                      role="toolbar"
                      aria-label="Orthodontic Educational Video Controls"
                    >
                      <div className="flex items-center gap-2.5 bg-[#1A1A1A]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-2xl">
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
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ClinicVideoExperience;
