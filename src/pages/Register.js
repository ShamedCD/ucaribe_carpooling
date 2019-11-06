import {
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonContent,
  IonText,
} from '@ionic/react';
import React, { Component } from 'react';
import Header from '../components/Header/index';

export class Register extends Component {
  render() {
    return (
      <IonPage>
        <Header title="Registro"></Header>
        <IonContent>
          <IonItem>
            <IonLabel position="stacked">
              Nombre <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Apellidos <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Carrera</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </IonContent>
      </IonPage>
    );
  }
}

export default Register;
