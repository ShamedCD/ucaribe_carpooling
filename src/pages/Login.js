import { IonPage } from '@ionic/react';
import React, { Component } from 'react';
import Header from '../components/Header/index';

export class Login extends Component {
  render() {
    return (
      <IonPage>
        <Header title="Ucaribe Carpooling" />
      </IonPage>
    );
  }
}

export default Login;
