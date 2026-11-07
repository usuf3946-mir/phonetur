export default function BookAppointment() {
  return (
    <section className="booking" id="contato">
      <div className="booking-card">
        <img src="media.png" alt="Мужчина разговаривает по телефону" />
        <form className="booking-form">
          <h3>Book Appointment</h3>

          <label htmlFor="name">Name *</label>
          <input id="name" type="text" placeholder="Full Name *" />

          <label htmlFor="email">Email address *</label>
          <input id="email" type="email" placeholder="example@gmail.com" />

          <label htmlFor="dept">Departament *</label>
          <select id="dept" defaultValue="">
            <option value="" disabled>Please Select</option>
            <option>Investment</option>
            <option>Taxation</option>
            <option>Consulting</option>
          </select>

          <label htmlFor="time">Time *</label>
          <select id="time" defaultValue="">
            <option value="" disabled>4:00 Available</option>
            <option>10:00</option>
            <option>14:00</option>
            <option>16:00</option>
          </select>

          <button type="button" className="btn">Book Appointment</button>
        </form>
      </div>
    </section>
  );
}