import React from "react";

const Contact = () => {
  return (
    <section id="contato" className="section">
      <h2>Contato</h2>

      <form
        id="contact-form"
        action="https://formsubmit.co/gacascardi@outlook.com?_captcha=true"
        method="post"
      >
        <div className="campos-form">
          <input type="text" id="nome" name="nome" placeholder="Seu Nome" required />
          <input type="email" id="email" name="email" placeholder="Seu E-mail" required />
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Seu Telefone"
            maxLength="11"
            required
          />
          <textarea
            name="mensagem"
            id="mensagem"
            cols="30"
            rows="10"
            style={{ width: "100%" }}
            placeholder="Sua Mensagem"
          ></textarea>
          <input type="file" name="arquivo" id="arquivo" />

          <button type="submit" id="enviar">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

Contact.propTypes = {};

export default Contact;
