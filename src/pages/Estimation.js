import { useContext } from 'react';
import Prix from '../components/estimation/Prix';
import StepperEstimation from '../components/estimation/StepperEstimation';
import Header from '../components/Header';
import { prixContext } from '../contextprix/context';
import Salon from '../components/estimation/item/salon/meuble';
import Chambre from '../components/estimation/item/chambre';
import Cuisine from '../components/estimation/item/cuisine';
import Autre from '../components/estimation/item/autre';






const Estimation = () => {

    const value=useContext(prixContext)
    let some=0;
Salon.map(item =>{
    if(localStorage.getItem(item.nomMeuble)!==null){
        some+=Number(JSON.parse(localStorage.getItem(item.nomMeuble)).prix)
      
}



    })
 
    Chambre.map(item =>{
       
        if(localStorage.getItem(item.nomMeuble)!==null){
            some=Number((JSON.parse(localStorage.getItem(item.nomMeuble))).prix)
       
        }
 
    })
 
    Cuisine.map(item =>{

        if(localStorage.getItem(item.nomMeuble)!==null){
            some+=Number((JSON.parse(localStorage.getItem(item.nomMeuble))).prix)
        
       
        }
 
    })
    Autre.map(item =>{

        if(localStorage.getItem(item.nomMeuble)!==null){
            some+=Number((JSON.parse(localStorage.getItem(item.nomMeuble))).prix)
            
           
       
        }
           
    }) 
   

    return (
        <prixContext.Provider value={value}>
        <div>
            
            <Header />
            <div className='p-8'>
            
                <Prix  value={value.prixChambre+value.prixAutre+value.prixCuisine+value.prixSalon}/>
                
                <StepperEstimation />
              
            </div>
        </div>
        </prixContext.Provider>
    );
};

export default Estimation;