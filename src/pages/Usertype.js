import { IonPage, IonContent } from '@ionic/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/index';
import { ButtonFromIon, Wrap } from '../theme/Usertype.style';

export class Usertype extends Component {
  render() {
    const userTypes = ['Aventador', 'Aventado'];
    return (
      <IonPage>
        <Header title="¿Qué deseas hacer?"></Header>
        <IonContent>
          <Wrap>
            {userTypes.map(type => (
              <Link to="/register">
                <ButtonFromIon expand="block">{type}</ButtonFromIon>
              </Link>
            ))}
          </Wrap>
        </IonContent>
      </IonPage>
    );
  }
}

export default Usertype;
