import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CallToAction } from '../CallToAction/CallToAction';

import '../../styles/layout/contentcontact.scss';

export function ContentContact() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="main-card">
            <h2>ENTRE EM CONTATO CONOSCO</h2>
            <div className="divider"></div>
            <p>
              <strong>ENVIE UMA MENSAGEM OU VENHA NOS CONHECER</strong>
            </p>
            <Button variant="primary" onClick={handleShow}>
              Inserir Dados de Contato
            </Button>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <a href="https://www.google.com/maps?q=Praça+Haroldo+Daltro,+394+-+São+Paulo,+SP" target="_blank">
                <FaMapMarkerAlt className="icon" />
                <h3>Estamos Localizados</h3>
                <p>Praça Haroldo Daltro nº 394 - Vila Nova Manchester</p>
              </a>
            </div>
            <div className="info-card">
              <a href="mailto:comercial@eleconfortelevadores.com.br" target="_blank">
                <FaEnvelope className="icon" />
                <h3>Email</h3>
                <p>comercial@eleconforteelevadores.com.br</p>
              </a>
            </div>
            <div className="info-card">
              <a
                href="https://api.whatsapp.com/send?1=pt_BR&text=Ol%C3%A1,%20Tudo%20bem?%20Gostaria%20de%20Saber%20Mais%20Informa%C3%A7%C3%B5es.&phone=5511991239476"
                target="_blank"
              >
                <FaWhatsapp className="icon" />
                <h3>WhatsApp</h3>
                <p>Entre em contato clicando</p>
              </a>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.580720582144!2d-46.5336333253746!3d-23.547578061084607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e0bd0e9c06b%3A0x1d8464edd0f1d098!2sPra%C3%A7a%20Haroldo%20Daltro%2C%20394%20-%20Vila%20Nova%20Manchester%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003444-090!5e0!3m2!1spt-BR!2sbr!4v1738176031800!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insira seus dados de contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" className='test'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="tel" placeholder="Digite seu telefone" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <CallToAction />
    </>
  );
}
