import { IonList, IonItem, IonLabel, IonImg } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <><div id="container">
      <strong>My name is Rasheed Senior. I'm apart of the <a href="#">Turning Team</a> </strong>
      <p>I'm a Student of the <a href="https://www.mona.uwi.edu/"> UWI, Mona</a> and I am passionate about computer science.</p>
      <p>I enjoy swimming,reading and volunteering.</p>
    {/* <IonList>
      <IonItem>
        <IonLabel>Swimming</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Reading Personal Development Books</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Helping Others in Volunteering</IonLabel>
      </IonItem>
    </IonList> */}
    <div className="" id='img-containter'>

    <IonImg src="/images/Rasheed_Senior_-_Profile_Pic-removebg-preview.png" alt='Image of Rasheed Senior'
     style={{ width: '50%', height: 'auto' }}
     />

    </div>
    </div>
    </>
  );
};

export default ExploreContainer;
 