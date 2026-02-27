"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const delayedClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 60);
  }

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" style={{color: "white", textDecoration: "none"}}>
          <div className="logo">The Fencing Armory</div>
        </Link>
        <nav className={`nav nav-links ${open ? "active" : ""}`}>
          <div onClick={() => delayedClose()}><Link href="/">Home</Link></div>
          <div onClick={() => delayedClose()}><Link href="/about">About</Link></div>
          <div className="nav-btn-ref" >
            <div onClick={() => delayedClose()}>
              <Link href="/tester">
                <div className="nav-btn" >Whiteside Fencing Tester</div>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;