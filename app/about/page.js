"use client";
import ExportedImage from "next-image-export-optimizer";
import ContactUsButton from "../components/ContactUsButton";

export default function About() {
  return (
    <main className="About">
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>
              We are a father-and-son company focused on crafting modern,
              professional solutions for fencing armory services with precision and purpose.
            </p>
          </div>

          <div className="hero-image">
            <ExportedImage
              src="/images/family-portrait.png"
              alt="Family Portrait"
              width={500}
              height={720}
              style={{objectFit: "cover", objectPosition: "center top", width: "100%", height: "auto"}}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section lower-section">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Founded on experience and innovation, our company blends decades
            of technical expertise with next-generation thinking. We specialize
            in building high-performance web applications, digital systems,
            and custom technology solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section lower-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To create elegant, scalable, and future-ready technology that helps
            businesses grow — while strengthening the bond between craftsmanship
            and creativity.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section lower-section">
        <div className="container">
          <h2 className="team-heading">Our Team</h2>

          <div className="team-grid">

            <div className="team-card">
              <div className="team-image">
                <ExportedImage
                src="images/dad-headshot.jpeg"
                alt="John Doe" 
                width={420}
                height={420}
                style={{objectFit: "cover", objectPosition: "center top"}}
                />
              </div>
              <div className="team-content">
                <h3>Steward Whiteside</h3>
                <span>Co-founder + Chief Innovator</span>
                <p>
                  Steward provides the product vision and technical leadership
                  regarding armory services. His professional experience includes 
                  working as a USAF National Armorer. With over a decade serving
                  the fencing community, Steward has improved efficiency and 
                  organization for armory services across the country.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <ExportedImage
                src="images/headshot-natural-v1-0.5x.png"
                alt="Michael Doe" 
                width={420}
                height={420}
                style={{objectFit: "cover", objectPosition: "center top"}}
                />
              </div>
              <div className="team-content">
                <h3>Johan Whiteside</h3>
                <span>Co-founder + Chief Engineer</span>
                <p>
                  Johan leads the engineering and user experience efforts,
                  providing technical solutions to meet the needs of our business. 
                  Johan's electronics and software inventions are responsible for 
                  our advancing technology. Johan graduated Magna Cum Laude from 
                  University of Connecticut with a B.S. in Computer Science.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <h2>Let's Build Something Meaningful</h2>
          <ContactUsButton />
        </div>
      </section>
    </main>
  );
}