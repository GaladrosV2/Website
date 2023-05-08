const contact = () => {
  return (
    <section className="contact">
      <h1>Skontaktuj się ze mną</h1>
      <form className="wrap">
        <input type="text" placeholder="Twoję imię" />
        <input type="text" placeholder="Twój email" />
        <textarea placeholder="Twoja wiadomość" />
        <button>Wyślij wiadomość</button>
      </form>
      <div className="socials">
        <div className="twitter"></div>
        <div className="github"></div>
        <div className="linkedin"></div>
      </div>
    </section>
  );
};

export default contact;
