import Modernization from '../../assets/modernization.png';

import '../../styles/layout/modernizationservice.scss';

export function ModernizationService() {
  return (
    <>
      <div className="modernizationWrapper">
        <div className="containerModernization">
          <h2>
            MODERNIZAÇÃO DE ELEVADORES
            <span>POR QUE MODERNIZAR?</span>
          </h2>

          <p>
            A modernização de elevadores é um dos fatores mais importantes quando se fala de conforto e segurança. Nós da Eleconfort
            trazemos o que há de melhor no mercado para o conforto do seu prédio ou condomínio, veja alguns dos nossos serviços.
          </p>

          <button>Veja nossos serviços</button>
        </div>

        <img src={Modernization} alt="Foto da Modernização de Elevadores" />
      </div>

      <div className="divider"></div>
    </>
  );
}
