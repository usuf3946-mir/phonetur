import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingCard from "./components/PricingCard";
import Testimonial from "./components/Testimonial";
import BookAppointment from "./components/BookAppointment";
import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Branches from "./components/Branches";

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <section className="section" id="produto">
        <div className="container">
          <h2 className="section-title">Better Strategy With<br />Quality Business</h2>
          <p className="section-sub">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="features-grid">
            <FeatureCard title="Investment Trading" text="the quick fox jumps over the lazy dog" />
            <FeatureCard title="Support On Raising Funds" text="the quick fox jumps over the lazy dog" />
            <FeatureCard title="Financial Analysis" text="the quick fox jumps over the lazy dog" />
            <FeatureCard title="Taxation Planning" text="the quick fox jumps over the lazy dog" />
            <FeatureCard title="Save money and time" text="the quick fox jumps over the lazy dog" />
            <FeatureCard title="Outsourced Consulting Business" text="the quick fox jumps over the lazy dog" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-sub">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <Testimonial
            name="Regina Miles"
            role="Designer"
            text="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
          />
        </div>
      </section>

      <section className="section" id="download">
        <div className="container">
          <h2 className="section-title">Download Our App</h2>
          <p className="section-sub">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="store-row">
            <a href="#" className="store-btn">Download on<br /><strong>App Store</strong></a>
            <a href="#" className="store-btn">Download on<br /><strong>Google Play</strong></a>
            <a href="#" className="store-btn">Download on<br /><strong>Amazon.com</strong></a>
            <a href="#" className="store-btn">Download on<br /><strong>Windows Store</strong></a>
          </div>
        </div>
      </section>

      <section className="section" id="precos">
        <div className="container">
          <h2 className="section-title">Pricing</h2>
          <p className="section-sub">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="pricing-grid">
            <PricingCard
              plan="FREE"
              price="0"
              text="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way."
            />
            <PricingCard
              plan="STANDARD"
              price="19"
              text="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way."
            />
          </div>
        </div>
      </section>

      <Branches />
      <BookAppointment />
      <Footer />
    </>
  );
}