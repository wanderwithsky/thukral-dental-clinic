import type { VideoTopic } from '../data/educationalVideos';
import CustomVideoPlayer from './CustomVideoPlayer';

interface EducationalVideoCardProps {
  video: VideoTopic;
  showCategoryBadge?: boolean;
}

export const EducationalVideoCard = ({ video, showCategoryBadge = true }: EducationalVideoCardProps) => {
  return (
    <article className="group flex flex-col w-full text-left">
      <CustomVideoPlayer
        videoUrl={video.videoUrl}
        posterUrl={video.posterUrl}
        ariaLabel={video.title}
        aspectRatioClass="aspect-[9/16]"
        className="transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_48px_rgba(33,26,22,0.3)] group-hover:border-[#C5A880]/50"
      />

      {/* Title & Short Description Outside and Beneath the Video Frame */}
      <div className="mt-5 flex flex-col">
        {showCategoryBadge && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
              {video.category}
            </span>
            {video.duration && (
              <>
                <span className="text-text-muted/40 text-xs">&middot;</span>
                <span className="text-[11px] text-text-muted font-mono">{video.duration}</span>
              </>
            )}
          </div>
        )}

        <h3 className="text-xl sm:text-2xl font-serif text-text group-hover:text-primary transition-colors duration-300 leading-snug">
          {video.title}
        </h3>

        <p className="mt-2 text-sm sm:text-[15px] text-text-muted leading-relaxed font-light">
          {video.description}
        </p>
      </div>
    </article>
  );
};

export default EducationalVideoCard;
