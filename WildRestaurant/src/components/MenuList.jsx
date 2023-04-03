import React from 'react';
import MenuItem from './MenuItem';

function MenuList( { foods }) {

  return (
    <div>
      {
        foods.map((food) => (
        // <div>
        //   <h3>{food.itemName}</h3>
        //   <p>{food.description}</p>
        //   <p>{food.price}</p>
        //   <img src={food.foodImage} />
        // </div> ou 
        <MenuItem food={food} />
        ))
      }


    </div>
  );
}

export default MenuList;