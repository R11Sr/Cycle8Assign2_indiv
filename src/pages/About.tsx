import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
          <IonButtons slot='end'>
            <IonButton routerLink='/About'>About</IonButton>
            <IonButton  routerLink='/Products'>Products</IonButton>                
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer />
        
      </IonContent>
    </IonPage>
  );
};

export default About;
