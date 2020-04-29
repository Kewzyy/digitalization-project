import React from 'react'
import { FoodMenuPage } from 'src/components/pages/food-menu-page'

export const request = require('request');

export const FoodMenu: React.FC = props => {
  const [result, setResult] = React.useState([]);

  const mealType = 'dessert'; //TODO: props.mealType ?

  React.useEffect(() => {
    async function getMealList() {
      try {
        const response = await fetch(`http://85.254.219.209:5000/users/meals?type=${mealType}`, {
         headers: new Headers({
           "Authorization": 'Basic ZGluZWFkbWluOms4M2kzaXph'
         }),
        }).then(resp=>resp.json()).then(data=>{ return data; });

        //console.log("response", response);
        setResult(
         response.map((meal:any) => {
            return meal;
         })
        );

      } catch (error) {
      }
    }

    getMealList();

  }, [mealType]);
  //console.log("RESULT: ", result)
  return <FoodMenuPage meals={result} />

}

