import React, { useState } from 'react';
import { TermsPoliciesLink, RegisterInputsContainer, InputRegister, ButtonContainer, InputRegisterContainer, SecondInputRegisterContainer } from './style/index.js'
import { ToggleButtonContainer, Icon } from '../LoginTab/style';
import eyeShowIcon from '../../../../assets/icons/eyeShowIcon.svg';
import eyeHideIcon from '../../../../assets/icons/eyeHideIcon.svg';
import { FormattedMessage } from 'react-intl';
import BlueButtonLoading from "../../../../components/Buttons/BlueButtonLoading";

const RegisterTab = props => {

  const [showPassword, setShowPassword] = useState(true);

  return (
  <>
    <RegisterInputsContainer>
      <InputRegisterContainer>
        <InputRegister
            name='email'
            onChange={props.handleChange}
            value={props.email}
            placeholder="Email"/>
      </InputRegisterContainer>
      <InputRegisterContainer>
        <InputRegister
            name='password'
            type='password'
            onChange={props.handleChange}
            value={props.password}
            placeholder="Password"/>
      </InputRegisterContainer>
      <SecondInputRegisterContainer>
      <InputRegister
          name='password2'
          type={showPassword ? 'password' : 'text'}
          onChange={props.handleChange}
          value={props.password2}
          placeholder="Confirm Password"/>
      {showPassword 
        ?
        <ToggleButtonContainer onClick={() => setShowPassword(!showPassword)}>
          <Icon src={eyeShowIcon} />
        </ToggleButtonContainer>
        :
        <ToggleButtonContainer onClick={() => setShowPassword(!showPassword)}>
          <Icon src={eyeHideIcon} />
        </ToggleButtonContainer>
      }
      </SecondInputRegisterContainer>
      <ButtonContainer>
        <TermsPoliciesLink>
          <FormattedMessage id={"paramsPage.agreementText"} />
        </TermsPoliciesLink>
      </ButtonContainer>
      <ButtonContainer>
        <BlueButtonLoading isLoading={props.loading} onClick={() => props.handleRegister()}>
          {
            <FormattedMessage id={"global.register"} />
          }
        </BlueButtonLoading>
      </ButtonContainer>
      </RegisterInputsContainer>
  </>
  );
};

export default RegisterTab;
