import { IonHeader, IonGrid, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import { Wrap } from './index.style';

const Header = ({ title }) => (
  <IonHeader>
    <Wrap>
      <IonRow>
        <IonCol>
          <strong>{title}</strong>
        </IonCol>
      </IonRow>
    </Wrap>
  </IonHeader>
);

export default Header;
