"use client";
import { useState } from "react";
import ContactUsButton from "./ContactUsButton";

export default function ComingSoonModal({open, setOpen}) {
  return (
    <>
      {/* Modal */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <h2>Coming Soon</h2>
            <p>
              We are finalizing our production process and will soon begin keeping a wait list! Stay tuned!
            </p>

            <ContactUsButton />
          </div>
        </div>
      )}
    </>
  );
}