import React from 'react'
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {creator} from './store'
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoItem,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchWrapper
} from './style';

class Header extends React.Component {
  getListArea = (show) => {
    const {totalPage, mouseIn, list, page, focused, handleChangePage, handleMouseOut, handleMouseIn} = this.props;
    const newList = list.toJS();
    const showList = [];

    if (newList.length > 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        showList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseOut}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              换一换
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {showList}
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
        <Link to={"/"}>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className={"left active"}>首页</NavItem>
          <NavItem className={"left"}>App</NavItem>
          {
            this.props.login ?
              <NavItem className={"right"}>退出</NavItem> :
              <Link to={'/login'}>
                <NavItem className={"right"}>登陆</NavItem>
              </Link>
          }

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
                onFocus={() => this.props.handleSearchFocus(this.props.list)}
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['Login', 'login'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFocus(list) {
      (list.size === 0) && dispatch(creator.getTagList());
      dispatch(creator.searchFocus());
    },
    handleSearchBlur() {
      dispatch(creator.searchBlur());
    },
    handleMouseIn() {
      dispatch(creator.handleMouseIn());
    },
    handleMouseOut() {
      dispatch(creator.handleMouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page >= totalPage) {
        page = 1
      } else {
        page = page + 1
      }
      dispatch(creator.handleChangePage(page))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
