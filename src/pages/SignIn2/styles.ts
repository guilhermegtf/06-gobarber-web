import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 15px;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  text-align: center;
  font-family: Graphik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
`;

export const LogoContainer = styled.div`
  background-color: #7a37ae;
  height: 100%;
  width: 80%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 100px;
    width: 240px;
  }
`;

export const SignInContainer = styled.div`
  background-color: #fff;
  flex-grow: 1;
  text-align: left;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  animation: ${appearFromRight} 1s;
`;

export const PrimaryContent = styled.div`
  width: 100%;
  flex: 1;
  min-height: min-content;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormComponent = styled.div`
  width: 340px;
`;

export const Title = styled.h1`
  font-size: 31px;
  line-height: 37px;
  color: #504b69;
  font-weight: lighter;
  margin-bottom: 14px;
`;

export const DivInput = styled.div`
  margin-bottom: 14px;
`;

export const FormInput = styled.input`
  background-color: #f4f3f5;
  width: 100%;
  box-sizing: border-box;
  height: 42px;
  font-size: 15px;
  line-height: 22px;
  border-radius: 4px;
  border: solid 1px #a9a6b7;
  padding-left: 15px;
  color: #4c4761;
  font: inherit;
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  div {
    display: inline-block;

    a {
      color: #24ccfd;
      text-decoration: none;
      font: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  transition: all 0.1s ease-in;
  color: white;
  font-size: 15px;
  font-weight: 200;
  background-color: #7a37ae;
  border-radius: 4px;
  border: solid 1px rgba(19, 13, 66, 0.2);
  padding: 12px 20px;
  box-shadow: 0 0 1px 0 rgba(19, 13, 66, 0.1);
  font: inherit;

  &:hover {
    background-color: ${shade(0.2, '#7a37ae')};
  }
`;
