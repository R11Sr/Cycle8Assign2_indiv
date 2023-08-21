import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonButton, IonRouterLink } from '@ionic/react';
import HomeContainer from '../components/HomeContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home!  </IonTitle>
          <IonButtons slot='end'>
            <IonButton routerLink='/About'>About</IonButton>
            <IonButton  routerLink='/Products'>Products</IonButton>
                
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <HomeContainer />
                
      </IonContent>
    </IonPage>
  );
};

export default Home;
