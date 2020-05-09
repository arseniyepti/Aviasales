import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face {
	font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');
 	}
 	@font-face {
 	font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOVuhpOqc.woff2) format('woff2');
 	}
 	  
	*{
  	box-sizing: border-box;
	}

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: center;
    color: #4A4A4A;
  }
`;

export default GlobalStyle;
