import React, { Component } from 'react';
import './styleyasmine.css';
import Button from '../shared/Button/Button';


export default class InscriYasmine extends Component {
    render() {
        return ( <div className="souscription-form-content-yasmine" >
          <div className="souscription-form-title-yasmine">
            Le parrain:
          </div>
          <div className="souscription-form-yasmine">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="form row" action="" method="post" id="yasmine">
                            <div className="form-group col-md-6 col-sm-12">
                                <label for="username">Nom et Prénom* :</label>
                                <input type="text" name="username" id="username" className="form-control form-control-lg" />
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label for="phone">Numéro Téléphone* :</label>
                                <input type="text" name="phone" id="phone" className="form-control form-control-lg" />
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label for="email">Adresse Mail* :</label>
                                <input type="email" name="email" id="email" className="form-control form-control-lg" />
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label for="cin">Pays de résidence* :</label>
                                <input type="text" name="cin" id="cin" className="form-control form-control-lg" />
                            </div>
                            <div className="form-group col-md-6 col-sm-12">
                                <label for="client">Agence Al Baraka Bank souhaitée* :</label>
                                <input type="text" name="client" id="client" className="form-control form-control-lg" />
                            </div>
                            <small className="col-md-12">
                              *champ obligatoire
                            </small>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="form-submit">
          <Button value="ANNULER" type="cancel" />
          <Button value="VALIDER" type="validate" />
        </div>
      </div>
           
        )
    }
}
