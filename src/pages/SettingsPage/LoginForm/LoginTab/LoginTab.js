import React, { useState } from 'react';
import { Input, ButtonContainer, LoginInputsContainer, FirstInputContainer, SecondInputContainer, Icon, ToggleButtonContainer} from './style';
import eyeShowIcon from '../../../../assets/icons/eyeShowIcon.svg';
import eyeHideIcon from '../../../../assets/icons/eyeHideIcon.svg';
import { FormattedMessage } from 'react-intl';
import BlueButtonLoading from "../../../../components/Buttons/BlueButtonLoading";

const LoginTab = props => {

  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
        <LoginInputsContainer>
          <FirstInputContainer>
            <Input
              name="email"
              onChange={props.handleChange}
              value={props.email}
              placeholder="Email"
            />
            </FirstInputContainer>
            <SecondInputContainer>
            <Input
              name="password"
              type={showPassword ? 'password' : 'text'}
              onChange={props.handleChange}
              value={props.password}
              placeholder="Password"
            />
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
            </SecondInputContainer>
            <ButtonContainer>
              <BlueButtonLoading isLoading={props.loading} onClick={() => props.handleLogin()}>
                  <FormattedMessage id={"global.login"} />
              </BlueButtonLoading>
            </ButtonContainer>
        </LoginInputsContainer>
      </>
  );
};

export default LoginTab;
