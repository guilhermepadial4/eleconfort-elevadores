import { ModernizationService } from './ModernizationService/ModernizationService';

import ElevatorOperation from '../../assets/elevator-operation.png';

import '../../styles/layout/content.scss';
import { Map } from './Map/Map';

export function Content() {
  return (
    <>
      <main className="containerContent">
        <div className="contentLeft">
          <h2 className="title">
            VOCÊ CONHECE SEU ELEVADOR?
            <span>ENTENDA COMO ELE FUNCIONA.</span>
          </h2>

          <img src={ElevatorOperation} alt="Funcionamento Elevador" />
        </div>

        <div className="servicesList">
          <h3>Serviços Prestados</h3>
          <ul>
            <li>
              <span>Máquina de tração</span>
              <p>Substituição do cabo de aço</p>
            </li>
            <li>
              <span>Limitador de velocidade</span>
              <p>Manutenção do regulador de velocidade</p>
            </li>
            <li>
              <span>Topo da cabine</span>
              <p>Limpeza e pintura do topo da cabine</p>
            </li>
            <li>
              <span>Botoeira de cabine</span>
              <p>Modernização das botoeiras</p>
            </li>
            <li>
              <span>Botoeira do pavimento</span>
              <p>Modernização das botoeiras</p>
            </li>
            <li>
              <span>Quadro de comando</span>
              <p>Modernização do quadro</p>
            </li>
            <li>
              <span>Caixa de inspeção</span>
              <p>Modernização da caixa</p>
            </li>
            <li>
              <span>Operador de porta</span>
              <p>Manutenção do operador</p>
            </li>
            <li>
              <span>Display</span>
              <p>Substituição e Modernização do display</p>
            </li>
          </ul>
        </div>
      </main>
      <div className="divider"></div>

      <ModernizationService />
      <div className="divider"></div>
      <Map />
    </>
  );
}
