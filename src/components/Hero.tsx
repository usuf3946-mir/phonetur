export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Financial<br />Assistance With<br />True Purpose</h1>
          <p>We know how large objects will act,<br />but things on a small scale.</p>
          <div className="hero-buttons">
            <a href="#contato" className="btn">Get Quote Now</a>
            <a href="#produto" className="btn btn-outline">Learn More</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="col-md-6.png" alt="Приложение на телефоне" />
        </div>
      </div>
    </section>
  );
}