import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 30px;
  }
`;

type ButtonProps = {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  background: ${(props) => (props.primary ? '#4B59F7' : '#0467Fb')};
  white-space: no-wrap;
  padding: ${(props) => (props.big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${(props) => (props.fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &::hover {
    transition: all 0.3s ease-out;
    background: ${(props) => (props.primary ? '#4B59F7' : '#0467Fb')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyles;
