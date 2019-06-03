import React from 'react'
import {connect} from "react-redux";

import { LoginWrapper, LoginBox, Input, Button } from './style';
import { creator } from "./store";

class Login extends React.PureComponent{


  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' innerRef={(input) => {
              this.account = input
          }}/>
          <Input placeholder='密码' type='password' innerRef={(input) => {
            this.password = input
          }}/>
          <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

const mapState = () => {
    return {

    }
};

const mapDispatch = (dispatch) => {
  return {
    login(account, password){
      creator.login(account.value, password.login)
    }
  }
};

export default connect(mapState, mapDispatch)(Login);