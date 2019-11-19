import { IonPage } from '@ionic/react';
import React, { Component } from 'react';
import Header from '../components/Header/index';
import Map from '../components/Map/index';

export class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <IonPage>
        <Header title="Elige tu direccion"></Header>
        <Map
          google={this.props.google}
          center={{ lat: 18.5204, lng: 73.8567 }}
          height="300px"
          zoom={15}
        />
      </IonPage>
    );
  }
}

export default Address;
