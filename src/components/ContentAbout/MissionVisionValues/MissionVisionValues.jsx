import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa';

import '../../../styles/layout/missionvisionvalues.scss';

export function MissionVisionValues() {
  return (
    <section className="mvv-section">
      <div className="mvv-container">
        <div className="mvv-item">
          <FaBullseye className="mvv-icon" />
          <h2>Missão</h2>
          <p>
            Ser uma empresa que melhor atende e satisfaz as necessidades de seus clientes com rapidez e qualidade por seus colaboradores e
            parceiros.
          </p>
        </div>
        <div className="mvv-item">
          <FaEye className="mvv-icon" />
          <h2>Visão</h2>
          <p>
            Ser reconhecida pelo mercado como uma empresa tradicional, sempre com compromisso e ética, visando qualidade e segurança dos
            produtos e serviços. Fazendo com dedicação oque sabemos fazer de melhor: Elevadores!.
          </p>
        </div>
        <div className="mvv-item">
          <FaHeart className="mvv-icon" />
          <h2>Valores</h2>
          <p>
            Servir a todos nossos clientes sempre com, qualidade em tudo que fazemos, segurança, cultura de economia com melhor utilização
            de todos os produtos, ética e respeito por parte de todos os integrantes da nossa equipe Eleconfort.
          </p>
        </div>
      </div>
    </section>
  );
}
