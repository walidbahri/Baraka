import React from 'react'
import './packYasmine.css'
import H2 from '../shared/titles/H2';
import Puce from '../shared/Puce/Puce';

export default function PackYasmine() {
  return (
    <div className="pack-yasmine-section">
   
      <div className="pack-yasmine-title">
        <span className="pack">
          Pack
        </span>
        <span className="yasmine">
          Yasmine
        </span>
      </div>
      <H2 title="Tre,profitez des avantages du pack Yasmine:"/>
      <div className="filleul-content-packyasmine">
        <p>
          <span>
          <span> <strong>Gratuité</strong> </span> sur les virements recus de l'étranger<sup>**</sup>.
          </span>
        </p>

        <p>
          <span>
            <strong>0%</strong> de frais d'étude pour le financement Dar Al Baraka.
          </span>
        </p>

        <p>
          <span>
          <span>  <strong>Réduction</strong> </span>de 20% sur l'ensemble des tarifs des produits<br></br>
            et services composant le pack.
          </span>
        </p>
        <p>
          <span>
            <strong>Gratuité</strong> des frais de renouvellment de la carte en cas de perte<br />
            ou de vol.
          </span>
        </p>

      </div>

      
    </div>
  )
}
