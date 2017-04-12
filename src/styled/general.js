import styled, { injectGlobal } from 'styled-components';

// Define General rules like a CSS reset or font-family here
injectGlobal`
html {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  width:100%;
  height:100%;
  font-family: 'Helvetica';
}

* {
  outline: 0;  
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background:#A1FCDF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.header`
  width: 100%;
  height: 10%;
  background:#7FD8BE;
  text-align: center;
  padding: 1rem;
  font-size: 1.7rem;
  color: white;
  text-shadow: 0 1px 1px black;
`;
