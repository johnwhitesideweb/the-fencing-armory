import Image from "next/image";
import List from "../svg/List";
import InterchangeableBattery from "../svg/InterchangeableBattery";
import Interface from "../svg/Interface";
import WhitesideTesterAd from "../components/WhitesideTesterAd";
import VideoPreviewCard from "../components/VideoPreviewCard";

export default function Tester() {
  return (
    <main>
      <WhitesideTesterAd />

      <div className="product-info-wrapper lower-section">
        <div className="container">
          <h2>Product Information</h2>
          <div className="mini-nav">
            <a href="#instructions"><button className="primary-btn">Instructions</button></a>
            <a href="#tech-specs"><button className="primary-btn">Tech Specs</button></a>
            <a href="#tutorials"><button className="primary-btn">Tutorials</button></a>
          </div>
        </div>
      </div>

      <section className="section features-section">
        <div className="container features-grid">
          <div className="feature-card">
            <List />
            <h3>Complete Testing Suite</h3>
            <p>All tests used at inspection in the USA Fencing National Championship.</p>
          </div>

          <div className="feature-card">
            <InterchangeableBattery />
            <h3>Interchangeable Power Pack</h3>
            <p>Swap batteries in seconds for uninterrupted use during long events.</p>
          </div>

          <div className="feature-card">
            <Interface />
            <h3>User-Friendly Interface</h3>
            <p>Detailed, highly readable display with simple controls.</p>
          </div>
        </div>
      </section>


      <section className="instructions-section lower-section" id="instructions">
        <div className="container lower-container">
          <h1>Instructions</h1>

          <div>
            <h3>Body Cord Screen</h3>
            <p>Select the body cord plug icon. </p>
            <p>The display has three areas for the A, B. and C lines of the fencing wiring.</p>
            <p>Each area will show connected lines when there is a complete circuit and the show the quality of the connection as measured in ohms.</p>
            <p>It will also show green lights for conductivity within tolerances and red lights for failures.</p>

            <h3>Body Cords, Floor Cords, Reels</h3>
            <p>The conductivity thresholds are set up to test the body cords by them selves, and reels with cords. </p>
            <p>(The thresholds can be reset, but the menu is hidden to prevent accidental changes)</p>

            <h3>Body Cord Testing</h3>
            <p>Plug the body cord in. </p>
            <p>The sockets on the left will be referred to as the fencer's end and will take the end of the wire with the three plugs that are plugged into the reel while fencing. </p>
            <p>The sockets on the right will be referred to as the weapon end and will take the end of the wire with pins that are plugged into the weapon while fencing.</p>
            <p>When testing a foil or saber, the alligator clip is attached to the top socket, referred to as the A line.</p>
            <p>Find the place that has a smaller 3 mm plug for the foil weapon end, the rest of the sockets are are 4 mm. </p>
            <p>Wiggle the wires and look at the display. A good cord should maintain green lights and consistent lines and ohm readings for all three lines.</p>

            <h3>Mask Cord Testing</h3>
            <p>Mask cords can be tested across any one of these lines, but the A line is set up to accept the grip of the alligator clip.</p>


            <h3>The Lame Screen</h3>
            <p>Select the lame vest icon. </p>
            <p>Plug the two leads for the lame tester into the side. </p>
            <p>Testing will show the conductive quality of the metallic lame fabric.</p>
            <p>The scale goes up as the resistance rises from green to yellow to red. </p>
            <p>Green indicates the official rule threshold under 5 ohms.</p>
            <p>Yellow indicates the common inspection control acceptable variance to 10 ohms.</p>
            <p>Red is over the acceptable limits.</p>
            <p>The digital readout will show the actual ohm reading.</p>
            
            <h3>Weapon Screen</h3>
            <p>Select the weapon icon and then select epee, foil, saber.</p>
            <p>Plug a cord into the weapon.</p>
            <p>Plug the other end into the tester.</p>
            <p>For epees, push the tip to get a reading.</p>
            <p>For foil, the green light should be on until the tip is depressed.</p>
            <p>The green light indicates a reading within tolerance.</p>
            <p>The red light indicates a disconnect or a problem.</p>
            <p>Grounding will show up as extra lines between the A, B and C lines.</p>

            <h3>Power </h3>
            <p>Turn it on with the power button.</p>
            <p>Turn off the tester when not in use to save the battery. </p>
            <p>To change the battery, pull out the bottom tray, remove the battery, and replace </p>
            <p>The battery charges with a USB cord to a charging block.</p>
            <p>Use the proper charging for the 5 volt battery.</p>

            <h3>USAF and FIE Equipment Ohm (Ω) Conductivity Resistance Thresholds</h3>

            <div className="specs-wrapper lower-section">
              <table className="specs-table small-table">
                <tbody>
                  <tr>
                    <td>Body and mask cords:</td>
                    <td>1 Ω</td>
                  </tr>
                  <tr>
                    <td>Lamés:</td>
                    <td>5 Ω</td>
                  </tr>
                  <tr>
                    <td>Lame material on masks:</td>
                    <td>5 Ω</td>
                  </tr>
                  <tr>
                    <td>Weapon Points:</td>
                    <td>2 Ω</td>
                  </tr>
                  <tr>
                    <td>Floor Cords:</td>
                    <td>2.5 Ω</td>
                  </tr>
                  <tr>
                    <td>Reels:</td>
                    <td>3 Ω</td>
                  </tr>
                  <tr>
                    <td>Strip/Piste:</td>
                    <td>5 Ω</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>(To access the hidden Thresholds menu, quickly tap the AutoTester tab at the top of the screen within a few seconds of powering on)</p>

            <h3>Troubleshooting</h3>
            <p>In the event of glitching, power off and on</p>

            <br/>
            <p>Whiteside, INC</p>
            <p>TheFencingArmory@gmail.com</p>
          </div>
        </div>
      </section>

      <section className="tech-specs-section lower-section" id="tech-specs">
        <div className="container lower-container">
          <h1>Tech Specs</h1>

          <div className="specs-wrapper">
            <table className="specs-table">
              <tbody>
                <tr>
                  <td>Measurement Lines</td>
                  <td>8 Independent Channels</td>
                </tr>
                <tr>
                  <td>Resistance Range</td>
                  <td>0 Ω - 50 Ω</td>
                </tr>
                <tr>
                  <td>Resolution</td>
                  <td>0.1 Ω</td>
                </tr>
                <tr>
                  <td>Accuracy</td>
                  <td>±0.05 Ω</td>
                </tr>
                <tr>
                  <td>Battery Type</td>
                  <td>5V Rechargeable Power Pack (2000-5000mAh)</td>
                </tr>
                <tr>
                  <td>Battery Life</td>
                  <td>Up to 18 hours of continuous use</td>
                </tr>
                <tr>
                  <td>Operating Temperature</td>
                  <td>0°C - 50°C</td>
                </tr>
                <tr>
                  <td>Dimensions</td>
                  <td>155 x 85 x 29 mm (6.1 x 3.4 x 1.2 in)</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>310 g (incl. battery)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="tutorials-section" id="tutorials">
        <div className="container lower-container">
          <h1>Tutorials</h1>

          <div className="video-grid">
            <VideoPreviewCard
              title="How to fix a broken reel"
              thumbnail="/images/reel-tutorial.png"
              href="https://www.instagram.com/reel/DUmMNoWiVI1"
              platform="instagram"
            />

            <VideoPreviewCard
              title="How to repair a broken epee wire"
              thumbnail="/images/epee-repair.png"
              href="https://www.instagram.com/reel/DUtfYG9CShi"
              platform="instagram"
            />
          </div>
        </div>
      </section>
    </main>
  );
}