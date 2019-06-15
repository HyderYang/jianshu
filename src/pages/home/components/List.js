import React from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {ListInfo, ListItem} from "../style";

class List extends React.Component {

  render() {
    const {list} = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return <Link to={'/detail'} key={item.get('id')}>
              <ListItem>
                <img className={"pic"} src={item.get('imgUrl')} alt={item.get('title')}/>
                <ListInfo>
                  <h3 className={"title"}>{item.get('title')}</h3>
                  <p className={"desc"}>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          })
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['Home', 'articleList'])
  }
};

const mapDispatch = () => {
  return {};
};

export default connect(mapState, mapDispatch)(List);
