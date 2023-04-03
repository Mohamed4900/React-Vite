import React from 'react';
import MenuList from './MenuList';

function MenuItem( { food } ) {
    const {itemName, description, price, foodImage} = food;
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={foodImage} alt={itemName} />
        </div>
        <div className="itemDescription">
          <h3>{itemName}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div>{price} EUR</div>
        <div id="favorite" />
      </div>
    </div>
  );
};

// MenuItem.propTypes = {
//     food : PropTypes.shape({
//     itemName: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     foodImage: PropTypes.string,
//     }).isRequired,
// };

export default MenuItem;