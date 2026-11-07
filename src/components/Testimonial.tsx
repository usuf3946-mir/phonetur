type TestimonialProps = {
  name: string;
  role: string;
  text: string;
};

export default function Testimonial({ name, role, text }: TestimonialProps) {
  return (
    <div className="testimonial"><img src="bbd654197788c7da1a2ffb6f1d182ef172b33c5b.jpg" alt="" />
      <div  className="testimonial-avatar"  />
      <p>{text}</p>
      <div className="stars">★★★★☆</div>
      <h4>{name}</h4>
      <span>{role}</span>
    </div>
  );
}