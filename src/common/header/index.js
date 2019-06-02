import React from 'react'
import { CSSTransition } from "react-transition-group";
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
      focused: false
    }
  }

  handleSearchFocus = () => {
      this.setState({
        focused: true
      })
  };

  handleSearchBlur = () => {
    this.setState({
      focused: false
    })
  };
  
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
            <CSSTransition
              timeout={200}
              in={this.state.focused}
              className={"slide"}
            >
              <NavSearch
                className={this.state.focused ? "focused" : ""}
                onFocus={this.handleSearchFocus}
                onBlur={this.handleSearchBlur}
              />
            </CSSTransition>
            <i
              className={this.state.focused ? "focused iconfont zoom" : "iconfont zoom"}
            >&#xe614;</i>
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