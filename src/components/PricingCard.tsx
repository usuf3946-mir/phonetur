type PricingCardProps = {
  plan: string;
  price: string;
  text: string;
};

export default function PricingCard({ plan, price, text }: PricingCardProps) {
  return (
    <div className="pricing-card">
      <div className="pricing-head">
        <h3>{plan}</h3>
        <div className="price">
          {price}
          <small>$ Per Month</small>
        </div>
      </div>
      <p>{text}</p>
      <a href="#" className="btn">Try for free</a>
    </div>
  );
}