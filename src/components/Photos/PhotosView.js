import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosAdd } from 'react-icons/io';
import { FaSpinner } from 'react-icons/fa';

const PhotoWrap = styled.div`
    background: #F9FAFB;
    border: 1px solid #DEDEE0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    align-items: flex-start;
`;

const PhotoTitle = styled.span`
  margin: 15px 0 4px;
  display: block;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #303030;
`;

const AddPhoto = styled.div`
  width: 92px;
  height: 92px;
  background: #E4E4E4;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

`;

const File = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`;

const PhotoBlock = styled.div`
  width: 92px;
  height: 92px;
  margin-right: 10px;
  box-shadow: 0 2px 42px rgba(0,0,0,0.111233);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 2px 42px rgba(0,0,0,0.2);
  }
  svg {
    position: absolute;
    top: -6px;
    right: -6px;
    font-size: 23px;
    fill: #349A89;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
    overflow: hidden;
  }
`;


const PhotosView = ({ photos, onPhotoChange, deletePhoto, loadPhoto }) => {

  return (
    <div>
      <PhotoTitle>Photos</PhotoTitle>
      <PhotoWrap>
        {photos.map(photo => {
          return (
            <PhotoBlock key={photo}>
              <img src={photo} alt="preview" />
            </PhotoBlock>
          );
        })}


        {
          photos.length <= 5 &&
          <div>

            {
              loadPhoto.isLoading ? (
                <PhotoBlock>
                  <FaSpinner className='load-spinner' />
                </PhotoBlock>
              ) : (
                <AddPhoto>
                  <IoIosAdd size={'60px'} />
                  <File
                    onChange={e => onPhotoChange(e.target.files[0])}
                    type="file"
                    accept="image/x-png, image/gif, image/jpeg"
                  />
                </AddPhoto>
              )

            }

          </div>
        }


      </PhotoWrap>
    </div>
  );
};

PhotosView.propTypes = {};


PhotosView.propTypes = {
  selectedFile: PropTypes.array,
  addFile: PropTypes.func,
};

export default PhotosView;