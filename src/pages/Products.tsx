import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonButtons, IonCardTitle, IonCardContent, IonImg,IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Products.css';

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
          <IonButtons slot='end'>
            <IonButton routerLink='/About'>About</IonButton>                     
            <IonButton  routerLink='/home'>Home</IonButton>                
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size='3'>

              <IonCard>
                <IonImg src='/images/broom_and_dust_pan_set.png'/>
                <IonCardHeader>
                  <IonCardTitle><p>kelamayi Upgrade Stand Up Broom and Dustpan Set</p></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>$19.19</p>
                </IonCardContent>
      
              </IonCard>
            </IonCol>

            <IonCol size='3'>
              <IonCard>
                <IonImg src='/images/knife_set.png'/>
                <IonCardHeader>
                  <IonCardTitle><p>Home Hero 11-Pcs Kitchen Knife Set with 
                    Sheath and 2-Stage Knife Sharpener - Ultra-Sharp High 
                    Carbon Stainless Steel Knives Set for Kitchen with Ergonomic 
                    Handle (11 Pc Set, Black)</p></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>$19.99</p>
                </IonCardContent>
      
              </IonCard>

            </IonCol>

            <IonCol size='3'>
              <IonCard>
                <IonImg src='/images/pots.png'/>
                <IonCardHeader>
                  <IonCardTitle><p>DecoBros Kitchen Counter 
                    and Cabinet Pan Organizer Shelf Rack, Bronze</p></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>$16.87</p>
                </IonCardContent>
      
              </IonCard>

            </IonCol>
            <IonCol size='3'>
              <IonCard>
                <IonImg src='/images/cutlery_set.png'/>
                <IonCardHeader>
                  <IonCardTitle><p>24-Piece Black Silverware Set with Steak
                     Knives, Black Flatware Set for 4, Food-Grade Stainless
                      Steel Tableware Cutlery Set</p></IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>$19.99</p>
                </IonCardContent>
      
              </IonCard>

            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Products;
