import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect ,useState} from 'react';

const AvailableMeals = () => {
  const [meals , setMeals] =useState([]);
  const [isloading , setisloading] = useState(true);

  useEffect( () =>{
    const fetchMeals = async () =>{
    
     const response =  await fetch('https://food-order-f6f90-default-rtdb.firebaseio.com/Meals.json');
    const responseData = await response.json();
    const loadedMeals =[];
    for (const key in responseData){
      loadedMeals.push({
        id:key,
        name:responseData[key].name,
        description:responseData[key].name,
        price:responseData[key].price,
      })
    }
    setMeals(loadedMeals);
    setisloading(false);
    };
    fetchMeals();
    },[ ]);


    //we have to add .json specifcially for use real time database in firebase.
  //fetch return a promise because sending http request is asynchronous task 
  //effect function is syncronous we have to use async inside the function 
  if(isloading)  {
    return <section className={classes.MealsLoading}>
      <p>Loading ...</p>
    </section>
  }
  
  const mealsList = meals.map((meal) => (
    <MealItem
     id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

// id={MealItem.id}