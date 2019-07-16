import React from 'react';
import PropTypes from 'prop-types';
import {FaMapMarkerAlt, FaSearch} from 'react-icons/fa';
import styled from "styled-components";
import {IoIosClose} from 'react-icons/io';

const HeaderSearchView = ({search, setSearch, removeSearch, doSearch}) => {
    return (
        <HeaderLine>
            <div className="container">
                <SearchForm
                    onSubmit={e => {
                        e.preventDefault();
                        doSearch();
                    }}
                >
                    <Search>
                        <FaSearch color={'#000'} size={17} className={'location-icon'}/>
                        <input
                            type="text"
                            placeholder='Search products by name'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />

                        {search.length ? (
                            <CloseIcon>
                                <IoIosClose
                                    onClick={() => removeSearch()}
                                    size={40}
                                    color='#349A89'
                                />
                            </CloseIcon>
                        ) : null}
                    </Search>
                    <Location>
                        <FaMapMarkerAlt color={'#000'} size={17} className={'location-icon'}/>
                        <input type="text" placeholder='Location'/>
                    </Location>
                    <Button type='submit'>Search</Button>
                </SearchForm>
            </div>
        </HeaderLine>
    );
};

HeaderSearchView.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
};


const HeaderLine = styled.div`
  display: flex;
  align-items: center;
  max-width: 1180px;
  margin: auto;
  color: #fff;
`;

const Location = styled.div`
  background: #FFFFFF;
  border-radius: 4px;
  padding: 14px 10px 14px 40px;
  margin: 0 7px;  
  position: relative;
  input {
    border: 0;
    width: 100%;
  }
  .location-icon {
    position: absolute;
    top: 14px;
    left: 12px;
  }
`;

const Search = styled(Location)`
  margin: 0;
  flex: 1; 
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 4px;
  right: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 7px;
  &:hover {
    background-color: rgba(214,210,210,0.65);
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background: #3E3961;
  border-radius: 4px;
  padding: 16px 60px;
  cursor: pointer;
  border: 0;
  color: #fff;
`;


export default HeaderSearchView;