import React, { Component } from 'react'
import H2 from '../shared/titles/H2';
import './produityasmine.css';

export default class ProduitYasmine extends Component {
    render() {
        return ( <div className="filleul-section-produit">
      <H2 title="Produits et services du pack Yasmine"/>
      <div className="filleul-content-produit">
        <p>
         
          <span>
            Un compte dépôt à vue en devises, dinars convertibles ou dinars.
          </span>
        </p>
        <p> 
          <span>
           Un compte épargne Masken Al Baraka en dinars.
          </span>
        </p>
        <p> 
          <span>
          Une carte Al Baraka Gold Nationale ou Internationale.
          </span>
        </p>
        <p> 
          <span>
          Al Baraka Mobile Banking.
          </span>
        </p>
        <p> 
          <span>
          Al Baraka E-Banking.
          </span>
        </p>

      </div>
    </div>

        )
    }
}
