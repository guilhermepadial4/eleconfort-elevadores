import '../../styles/layout/calltoaction.scss';

export function CallToAction() {
  return (
    <section className="call-to-action">
      <h2>Deseja agendar uma conversa?</h2>
      <a
        href="https://api.whatsapp.com/send?1=pt_BR&text=Ol%C3%A1,%20Tudo%20bem?%20Gostaria%20de%20Saber%20Mais%20Informa%C3%A7%C3%B5es.&phone=5511991239476"
        target="_blank"
      >
        <button className="cta-button">Fale Conosco</button>
      </a>
    </section>
  );
}
