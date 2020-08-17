import React from 'react';

import {
  Container,
  Content,
  LogoContainer,
  SignInContainer,
  PrimaryContent,
  FormComponent,
  Title,
  DivInput,
  FormInput,
  GroupButton,
  Button,
} from './styles';
import ucondologo from '../../assets/ucondo_branco.png';

const SignIn2: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={ucondologo} alt="ucondo" />
        </LogoContainer>
        <SignInContainer>
          <PrimaryContent>
            <FormComponent>
              <Title>Sign In</Title>
              <form>
                <DivInput>
                  <FormInput
                    placeholder="Email"
                    type="email"
                    name="user[email]"
                    id="user_email"
                  />
                </DivInput>
                <DivInput>
                  <FormInput
                    placeholder="Password"
                    type="password"
                    name="user[password]"
                    id="user_password"
                  />
                </DivInput>
                <GroupButton>
                  <div>
                    <a href="/">Forgot password?</a>
                  </div>
                  <div>
                    <Button>Sign In</Button>
                  </div>
                </GroupButton>
              </form>
            </FormComponent>
          </PrimaryContent>
        </SignInContainer>
      </Content>
    </Container>
  );
};

export default SignIn2;
