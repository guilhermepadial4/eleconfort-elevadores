import { FaHeadset, FaTools, FaPaintBrush } from 'react-icons/fa';

import '../../styles/layout/companydifferentials.scss';

export function CompanyDifferential() {
  return (
    <div className="differentials-container">
      <div className="differential-card">
        <FaHeadset size={50} className="icon" />
        <h3>Suporte 24h</h3>
        <p>Atendimento disponível 24 horas por dia para emergências e suporte técnico.</p>
      </div>

      <div className="differential-card">
        <FaTools size={50} className="icon" />
        <h3>Técnicos Especializados</h3>
        <p>Equipe altamente qualificada e treinada para manutenção e modernização de elevadores.</p>
      </div>

      <div className="differential-card">
        <FaPaintBrush size={50} className="icon" />
        <h3>Embelezamento</h3>
        <p>Renovação estética dos elevadores, trazendo modernidade e sofisticação ao seu ambiente.</p>
      </div>
    </div>
  );
}
