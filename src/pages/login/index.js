import React from 'react'
import {connect} from "react-redux";

import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends React.PureComponent{


  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号'/>
          <Input placeholder='密码' type='password'/>
          <Button>登陆</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapState = () => {
    return {

    }
};

const mapDispatch = () => {
  return null
};

export default connect(mapState, mapDispatch)(Login);