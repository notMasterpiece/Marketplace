import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import { FaRegHeart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { renderPhoto } from '../../helpers/helpers';
import defaultPhoto from '../../assets/img/no-image.png';
import Spinner from '../../components/Spinner/Spinner';
import SlickSlider from '../../components/Slider/SlickSlider';
import ProductSell from '../../components/Modals/ProductSellModal/ProductSellContainer';
import { Avatar } from '../../components';

Modal.setAppElement('#modal');

const ProductPrice = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 19.44px;
  line-height: 22px;
  color: #101010;
  padding: 7px 20px 0 20px;
  border-radius: 10px 0 0 0;
  background-color: #fff;
`;
const ProductImgWrap = styled.div`
  position: relative;
`;
const ProductInfo = styled.div``;

const ProductImg = styled.div`
  text-align: center;
  max-width: 100%;
  height: 275px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

const ProductDescr = styled.div`
  padding: 12px 20px;
`;
const ProductTime = styled.span`
  color: #9d9d9d;
  display: inline-block;
  margin-left: 10px;
`;

const ProductName = styled.div`
  text-transform: capitalize;
  margin-bottom: 10px;
`;
const ProductLocation = styled.div`
  margin-bottom: 10px;
  color: #9d9d9d;
`;
const ProductDescription = styled.div`
  padding-top: 12px;
  border-top: 1px solid rgba(151, 151, 151, 0.166439);
`;

const UserWrap = styled.div`
  width: 260px;
  min-width: 260px;
  @media (max-width: 1000px) {
    margin-top: 20px;
    width: 100%;
  }
`;
const CardBlock = styled.div`
  display: flex;
  margin: 36px 0;
  flex-wrap: wrap;
`;

const ProductWrap = styled.div`
  background: #ffffff;
  border: 1.08px solid #e4e4e4;
  box-shadow: 0 5px 15px rgba(121, 121, 121, 0.0527344);
  border-radius: 4.32px;
  margin-right: 12px;
  width: calc(100% - 272px);
  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }
`;

const UserInfo = styled.div`
  padding: 14px;
  position: relative;
  border-radius: 4px 4px 0 0;
  text-align: center;
  border: 1px solid #dedee0;
  margin-bottom: 18px;
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: block;
    background: #349a89;
    border-radius: 4px 4px 0 0;
    z-index: -1;
  }
`;

const UserName = styled.div`
  font-size: 15px;
  line-height: 17px;
  color: #2b2b2b;
  text-align: center;
  margin-top: 7px;
`;

const Userlocation = styled.div`
  font-size: 15px;
  line-height: 17px;
  color: rgba(43, 43, 43, 0.499918);
`;

const UserAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;
const UserChat = styled.button`
  background: #349a89;
  border-radius: 4px;
  border: 0;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  padding: 17px;
  cursor: pointer;
  font-size: 14px;
  height: 47px;
  margin-bottom: 18px;
  &:hover {
    background-color: #177156;
  }
`;

const AddFavorite = styled.button`
  border-radius: 4px;
  border: 1px solid #349a89;
  width: 100%;
  text-transform: uppercase;
  padding: 13px;
  cursor: pointer;
  font-size: 14px;
  height: 47px;
  color: #349a89;
  margin-bottom: 15px;
  background-color: #fff;
  svg {
    margin-right: 14px;
    vertical-align: middle;
  }
  &:hover {
    background-color: #eee;
  }
`;

const AddedFavorite = styled(AddFavorite)`
  color: #fff;
  background-color: #349a89;
  &:hover {
    background-color: #177156;
  }
`;

const Card = ({
  viewerId,
  product,
  owner,
  isLoading,
  isError,
  error,
  toggleModal,
  isModalOpen,
  toggleSaveProduct,
}) => {
  if (isError) {
    return <div className="block error-block">{error}</div>;
  }
  if (!product) {
    return <Spinner />;
  }
  const shoundShowLoading = isLoading || !owner;
  const ownerID = product.owner || product.ownerId;

  return (
    <div className="container">
      <CardBlock>
        <ProductWrap>
          <ProductInfo>
            <ProductImgWrap>
              {product.photos && product.photos.length > 1 ? (
                <SlickSlider photos={product.photos} />
              ) : (
                <ProductImg>
                  <img src={renderPhoto(product.photos)} alt={product.title} />
                </ProductImg>
              )}
              <ProductPrice>
                {'$'}
                {product.price}
              </ProductPrice>
            </ProductImgWrap>

            <ProductDescr>
              <ProductName>
                {product.title}
                <ProductTime>
                  {format(product.createdAt, 'Do MMMM YYYY')}
                </ProductTime>
              </ProductName>
              <ProductLocation>
                <FaMapMarkerAlt />
                {product.location}
              </ProductLocation>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductDescr>
          </ProductInfo>
        </ProductWrap>

        {shoundShowLoading ? (
          <UserWrap>
            <UserInfo>
              <UserAvatar>
                <img src={defaultPhoto} alt="user" />
              </UserAvatar>
            </UserInfo>
          </UserWrap>
        ) : (
          <UserWrap>
            <UserInfo>
              <Link to={`/users/${owner.id}/products`}>
                <UserAvatar>
                  <Avatar user={owner} />
                </UserAvatar>
              </Link>
              <Link to={`/users/${owner.id}/products`}>
                <UserName>{owner.fullName}</UserName>
              </Link>
              <Userlocation>{owner.location && owner.location}</Userlocation>
            </UserInfo>

            {ownerID === viewerId ? (
              <AddFavorite>this is your product</AddFavorite>
            ) : (
              <UserChat type="button" onClick={toggleModal}>
                Chat with seller
              </UserChat>
            )}

            {product.saved ? (
              <AddedFavorite
                type="button"
                onClick={() => toggleSaveProduct(product.id)}
              >
                <FaHeart size="17" />
                remove from favorive
              </AddedFavorite>
            ) : (
              <AddFavorite
                type="button"
                onClick={() => toggleSaveProduct(product.id)}
              >
                <FaRegHeart size="17" />
                Add to favorive
              </AddFavorite>
            )}
          </UserWrap>
        )}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          className="modal"
          overlayClassName="overlay"
        >
          <ProductSell product={product} owner={owner} onClose={toggleModal} />
        </Modal>
      </CardBlock>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object,
  owner: PropTypes.object,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isModalOpen: PropTypes.bool.isRequired,
  toggleSaveProduct: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Card;
