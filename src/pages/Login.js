import { IonPage } from '@ionic/react';
import React, { Component } from 'react';
import { Wrap } from './Login.style';
import Header from '../components/Header/index';

export class Login extends Component {
  render() {
    return (
      <IonPage>
        <Header title="Ucaribe Carpooling" />
        <Wrap></Wrap>
      </IonPage>
    );
  }
}

export default Login;
