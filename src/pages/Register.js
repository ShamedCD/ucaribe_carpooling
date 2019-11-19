import {
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonContent,
  IonText,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonButton,
} from '@ionic/react';
import React, { Component } from 'react';
import moment from 'moment';
import Header from '../components/Header/index';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        name: {
          value: '',
        },
        fatherLastName: {
          value: '',
        },
        motherLastName: {
          value: '',
        },
        birhdate: {
          value: moment().format(),
        },
        carreer: {
          value: '',
        },
      },
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    });
  };

  render() {
    const degrees = [
      { id: 1, name: 'Gastronimía' },
      { id: 2, name: 'Negocios Internaciones' },
      { id: 3, name: 'Innovación Empresarial' },
      { id: 4, name: 'Turismo' },
      { id: 5, name: 'Datos e Inteligencia Organizacional' },
      { id: 6, name: 'Industrial' },
      { id: 7, name: 'Ambiental' },
      { id: 8, name: 'Logística' },
    ];
    return (
      <IonPage>
        <Header title="Registro"></Header>
        <IonContent>
          <IonItem>
            <IonLabel position="stacked">
              Nombre <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              value={this.state.formControls.name.value}
              name="name"
              onIonChange={this.handleChange}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Apellido Paterno <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              value={this.state.formControls.fatherLastName.value}
              name="fatherLastName"
              onIonChange={this.handleChange}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Apellido Materno <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              value={this.state.formControls.motherLastName.value}
              name="motherLastName"
              onIonChange={this.handleChange}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Fecha de Nacimiento <IonText color="danger">*</IonText>
            </IonLabel>
            <IonDatetime
              displayFormat="DD/MM/YYYY"
              value={this.state.formControls.birhdate.value}
              name="birthdate"
              onIonChange={this.handleChange}
            ></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Carrera</IonLabel>
            <IonSelect
              interface="action-sheet"
              value={this.state.formControls.carreer.value}
              name="carreer"
              onIonChange={this.handleChange}
            >
              {degrees.map(({ id, name }) => (
                <IonSelectOption value={id}>{name}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonButton expand="block">Registrarse</IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default Register;
