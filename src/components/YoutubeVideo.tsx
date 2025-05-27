import Image from "next/image";
import { useState } from "react";

interface YoutubeVideoProps {
  videoId: string;
  aspect?: string;
  className?: string;
}

export default function YoutubeVideo({
  videoId,
  aspect = "aspect-video",
  className = "",
}: YoutubeVideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  function renderYoutubeVideo() {
    return (
      <div className={`relative w-full ${aspect} ${className}`}>
        {!showVideo && (
          <button
            className="absolute inset-0 w-full h-full flex items-center justify-center group"
            onClick={() => setShowVideo(true)}
            aria-label="Assistir vídeo"
          >
            <Image
              src={`/images/video-thumb.PNG`}
              alt="Capa do vídeo"
              className="w-full h-full object-cover rounded-lg"
              fill
            />
            <span className="absolute flex items-center justify-center bg-black/60 rounded-full w-20 h-20">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
        {showVideo && (
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    );
  }

  return <div className="w-full aspect-[1194/663]">{renderYoutubeVideo()}</div>;
}
