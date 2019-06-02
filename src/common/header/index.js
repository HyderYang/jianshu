import React from 'react'
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

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

const Header = (props) => {
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
            in={props.focused}
            className={"slide"}
          >
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleSearchFocus}
              onBlur={props.handleSearchBlur}
            />
          </CSSTransition>
          <i
            className={props.focused ? "focused iconfont zoom" : "iconfont zoom"}
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
};

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleSearchBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)