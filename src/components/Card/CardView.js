import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, generatePath } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { renderPhoto } from '../../helpers/helpers';
import { routes } from '../../routes';

const CardBlock = styled.div`
  width: 215px;
  border-radius: 4px;
  padding: 0 3px;
  margin-bottom: 10px;
`;

const CardItem = styled.div`
  background: #fff;
  border: 1px solid #e4e4e4;
  box-shadow: 0 4px 14px rgba(121, 121, 121, 0.0527344);
  border-radius: 4px;
  padding: 4px;
  width: 100%;
  height: 100%;
`;

const CardImg = styled.div`
  height: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CardIcon = styled.div`
  width: 30px;
  height: 30px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.163407);
  position: absolute;
  bottom: -15px;
  right: 7px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

const CardName = styled.div`
  font-size: 15px;
  line-height: 17px;
  color: #373738;
  padding: 7px 12px 0 12px;
  a {
    color: #373738;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const CardPrise = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #101010;
  padding: 7px 12px 10px 12px;
`;

function CardView({ likeHandler, product }) {
  const { title, saved, price, photos, id } = product;

  return (
    <CardBlock>
      <CardItem>
        <CardImg>
          <Link to={generatePath(routes.product, { id })}>
            <img src={renderPhoto(photos)} alt={title} />
          </Link>
          <CardIcon onClick={likeHandler}>
            {saved ? (
              <FaHeart color="#349A89" size="17" />
            ) : (
              <FaRegHeart color="#349A89" size="17" />
            )}
          </CardIcon>
        </CardImg>
        <CardName>
          <Link to={generatePath(routes.product, { id })}>{title}</Link>
        </CardName>
        <CardPrise>{price}</CardPrise>
      </CardItem>
    </CardBlock>
  );
}

CardView.propTypes = {
  likeHandler: PropTypes.func,
  product: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default CardView;
