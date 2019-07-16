import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../Card/CardListContainer';
import Spinner from '../Spinner/Spinner';
import FormTextInputSmall from '../Form/FormTexInputSmall';

const LatestView = ({ latest, isLoading, isError, search }) => {

  if (isError) {
    return <div className='block error-block'>Products not found ((( </div>;
  }
  if (isLoading) {
    return <Spinner />;
  }
  const filtered = latest.filter(product => product.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));

  return (
    <div className='container'>


      <div className="block small">

        <FormTextInputSmall
          type="text"
          placeholder="Price from (USD)"
          name="priceFrom"
        />

        <span>-</span>

        <FormTextInputSmall
          type="text"
          placeholder="Price to (USD)"
          name="priceTo"
        />
      </div>
        {/*{*/}
        {/*  Boolean(filtered.length)*/}
        {/*    ? filtered.map(product => {*/}
        {/*      return (*/}
        {/*        <CardView*/}
        {/*          key={product.id}*/}
        {/*          product={product}*/}
        {/*        />*/}
        {/*      );*/}
        {/*    })*/}
        {/*    : (*/}
        {/*      <div className='block error-block'>*/}
        {/*        Nothing found for <strong>{search}</strong>*/}
        {/*      </div>*/}
        {/*    )*/}
        {/*}*/}

        <Cards products={filtered} />
    </div>
  );
};

LatestView.propTypes = {
  latest: PropTypes.array.isRequired,
};

export default LatestView;
