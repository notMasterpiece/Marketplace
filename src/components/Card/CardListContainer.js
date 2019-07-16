import React from 'react';
import PropTypes from 'prop-types';
import Card from './CardContainer';

function CardListContainer({ products }) {
  return (
    <div className="cards">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

CardListContainer.propTypes = {
  products: PropTypes.array,
};

export default CardListContainer;
