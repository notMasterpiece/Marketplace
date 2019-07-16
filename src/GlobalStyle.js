import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "HelveticaRegular";
  src: url("./assets/fonts/HelveticaRegular/HelveticaRegular.eot");
  src: url("./assets/fonts/HelveticaRegular/HelveticaRegular.eot?#iefix")format("embedded-opentype"),
    url("./assets/fonts/HelveticaRegular/HelveticaRegular.woff") format("woff"),
    url("./assets/fonts/HelveticaRegular/HelveticaRegular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}


body {
  margin: 0;
  font-family: 'Helvetica', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F8F8F8;
}


* {
  box-sizing: border-box;
}

.dark {
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  color: #fff;
}

textarea.error,
input.error {
  outline: none;
  border: 1px solid #ff5454;
}



.container {
  max-width: 920px; 
  margin: auto;
  width: 100%;
}

main {
  flex: 1;
}


svg.load-spinner {
  position: static;
  animation-name: spin;
  animation-duration: 2500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


@keyframes spin { 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
    }


.cards {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -3px 50px -3px;
}

.block {
  margin: 34px auto;
  background-color: #fff;
  padding: 32px;
  box-shadow: 0 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  transition: box-shadow 300ms ease-in-out;
  max-width: 1136px;
  &.small {
    padding: 12px;
  }
  h1 {
    text-align: center;
    font-size: 22px;
    line-height: 25px;
    color: #282828;
  }
  &:hover {
     box-shadow: 0 2px 42px rgba(0, 0, 0, 0.2);
   }
}


input:focus,
textarea:focus {
  outline: none;
}


.error-block {
  background-color: #ff5661;
  color: #fff;
  strong {
    text-transform: uppercase;
  }
}

.block__form-wrap {
  margin: auto;
  max-width: 664px;
}

header {
  .like-svg {
    fill: #2B2B2B;
  } 
  &.dark {
      .like-svg {
        fill: #fff;
      } 
      a {
        color: #fff;
      }
  }
 a {
    color: #2B2B2B;
    text-decoration: none;
  }
}


.text-center {
  text-align: center;
}  




.overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    bottom: 0px;
    align-items: center;
    background: rgba(0, 0, 0, 0.37);
    justify-content: center;
    width: 100%;
}


.modal {
  width: 820px;
  border-radius: 7px;
  outline: none;
  padding: 17px 80px 35px;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  position: relative;
}

.modal-close {
  cursor: pointer;
  position: absolute;
  top: 23px;
  right: 23px;  
}

a {
  cursor: pointer;
}

.slick-slider {
  margin-bottom: 30px;
}

body .slick-dots li button:before {
  background-color: #349A89;
  content: '';
}


::-webkit-scrollbar {
    width: 8px; /* 1 - вертикальный скроллбар */
}

::-webkit-scrollbar:horizontal {
    height: 8px; /* 1 - горизонтальный скроллбар */
}

::-webkit-scrollbar-button {
    display: none;
    background: white; /* 2 - кнопка */
}

::-webkit-scrollbar-track {
    background: white; /* 3 - трек */
}

::-webkit-scrollbar-track-piece {
    background: white /* 4 – видимая часть трека */
}

::-webkit-scrollbar-thumb {
    background: lightgray;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1); /* 5 - ползунок */
}






@media screen and (max-width: 1000px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
}




`;


export default GlobalStyle;