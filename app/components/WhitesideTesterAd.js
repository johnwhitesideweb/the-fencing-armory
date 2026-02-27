"use client";
import ExportedImage from "next-image-export-optimizer";
import ComingSoonModal from "./ComingSoonModal";
import { useState } from "react";

const WhitesideTesterAd = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="whiteside-tester-ad hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="badge">NEW</span>
          <h1>Whiteside Fencing Tester</h1>
          <p>A high-precision equipment tester engineered for fencers and professional armorers.</p>
          <ul>
            <li>Cords (body/mask, floor, reel)</li>
            <li>Weapons (foil, epee, sabre)</li>
            <li>Lame</li>
          </ul>
          <button className="primary-btn" onClick={() => setModalOpen(true)}>Starting at $299</button>
        </div>
        
        <ComingSoonModal open={modalOpen} setOpen={setModalOpen} />
        
        <div className="hero-image showcase">
          <ExportedImage
            src="/images/cord-sticker5.png"
            alt="Computer"
            width={360}
            height={(360 / 724) * 1368}
            style={{objectFit: "cover", objectPosition: "center top", width: "100%", height: "auto"}}
            sizes="(max-width: 600px) 300px, 360px"
          />
          <div className="hero-image-shadow"> </div>
        </div>
      </div>
    </section>
  );
};

export default WhitesideTesterAd;