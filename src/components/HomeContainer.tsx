import { IonList, IonItem, IonLabel, IonImg } from '@ionic/react';
import './HomeContainer.css';

interface ContainerProps { }

const HomeContainer: React.FC<ContainerProps> = () => {
  return (
    <><div id="container">
     <strong>
        Welcome to My Site!
     </strong>
    </div>
    </>
  );
};

export default HomeContainer;
 