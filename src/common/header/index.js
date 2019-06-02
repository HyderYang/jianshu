import React from 'react'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

export default class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className={"left active"}>首页</NavItem>
          <NavItem className={"left"}>App</NavItem>
          <NavItem className={"right"}>登陆</NavItem>
          <NavItem className={"right"}>
            <i className={"iconfont"}>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className={"iconfont zoom"}>&#xe614;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className={"writting"}>
            <i className={"iconfont"}>&#xe615;</i>
            写文章
          </Button>
          <Button className={"reg"}>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}