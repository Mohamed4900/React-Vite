import React from 'react';
import PropTypes from 'prop-types';

function PokemonCard({pokemon}) {
    const { name, imgSrc} = pokemon;
    return (
        <div>
            <h1>{name}</h1>
            <div className='card'>
            <img className="avatar" src={imgSrc}/>
            </div>
        </div>
    );
};

PokemonCard.propTypes = {
    pokemon : PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
    
  };

export default PokemonCard;