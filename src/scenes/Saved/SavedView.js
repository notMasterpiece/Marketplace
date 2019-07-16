import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../components/Header/HeaderContainer';
import Cards from '../../components/Card/CardListContainer';

const SavedTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  text-transform: uppercase;
  padding: 24px 0;
  span {
    display: inline-block;
    margin-left: 10px;
    color: #ccc;
  }
`;

function Saved({ saved, isLoading }) {
  return (
    <div>
      <Header isSearch={false} />
      {(saved.length && !isLoading) ? (
        <div className="container">
          <div className="block" style={{ marginTop: '0' }}>
            {saved.length && <SavedTitle>SAVED ITEMS<span>{saved.length}</span></SavedTitle>}
            <Cards products={saved} />
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  );
}


Saved.propTypes = {
  saved: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Saved;
