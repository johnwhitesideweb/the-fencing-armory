import ExportedImage from "next-image-export-optimizer";

export default function VideoPreviewCard({
  title,
  thumbnail,
  href,
  platform,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card"
    >
      <div className="video-thumbnail-wrapper">
        <ExportedImage
        src={thumbnail}
        alt={title} 
        width={320}
        height={570}
        style={{objectFit: "cover", objectPosition: "center top", width: "100%", height: "auto"}}
        />
        {platform && (
          <span className="video-badge">
            {platform === "instagram" ? "Instagram Reel" : "TikTok"}
          </span>
        )}

        <div className="video-overlay">
          <div className="video-play-button"></div>
        </div>
      </div>

      <div className="video-content">
        <h3 className="video-title">{title}</h3>
      </div>
    </a>
  );
}