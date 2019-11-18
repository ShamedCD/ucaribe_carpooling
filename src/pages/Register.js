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
  IonButton
} from "@ionic/react";
import React, { Component } from "react";
import moment from "moment";
import Header from "../components/Header/index";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = ({ target }) => {
    const { value: name } = target;
    this.setState({ name });
    console.log(this.state.name);
  };

  getUserInfo() {
    console.log("name: ", this.state.name);
  }

  render() {
    const degrees = [
      { id: 1, name: "Gastronimía" },
      { id: 2, name: "Negocios Internaciones" },
      { id: 3, name: "Innovación Empresarial" },
      { id: 4, name: "Turismo" },
      { id: 5, name: "Datos e Inteligencia Organizacional" },
      { id: 6, name: "Industrial" },
      { id: 7, name: "Ambiental" },
      { id: 8, name: "Logística" }
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
              value={this.state.name}
              name="name"
              onIonChange={this.handleChange}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Apellido Paterno <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Apellido Materno <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Fecha de Nacimiento <IonText color="danger">*</IonText>
            </IonLabel>
            <IonDatetime
              displayFormat="DD/MM/YYYY"
              value={moment().format()}
            ></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Carrera</IonLabel>
            <IonSelect interface="action-sheet">
              {degrees.map(({ id, name }) => (
                <IonSelectOption value={id}>{name}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonButton expand="block" onClick={() => this.getUserInfo()}>
            Registrarse
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default Register;
