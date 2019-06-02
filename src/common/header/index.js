import React from 'react'
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";

import {creator} from './store'
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

class Header extends React.Component {
  getListArea = (show) => {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item, index) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };



  render() {
    return (
      <HeaderWrapper>
        <Logo/>
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
              in={this.props.focused}
              className={"slide"}
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={this.props.handleSearchFocus}
                onBlur={this.props.handleSearchBlur}
              />
            </CSSTransition>
            <i
              className={this.props.focused ? "focused iconfont zoom" : "iconfont zoom"}
            >&#xe614;</i>
            {this.getListArea()}
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

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', "focused"]),
    list: state.getIn(['header', 'list'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus() {
      dispatch(creator.getTagList());
      dispatch(creator.searchFocus());
    },
    handleSearchBlur() {
      dispatch(creator.searchBlur());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)