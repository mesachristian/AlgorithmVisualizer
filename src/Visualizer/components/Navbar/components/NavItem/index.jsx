import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class NavItem extends Component{
  render(){
    
    const { index, isSelected, onClick, iconName, url } = this.props;
    const style = isSelected ? "active" : "nav-item";

    return(
      <li className={style}>
        <div className="nav-item-container">
          <Link to={url} className="nav-item-body" onClick={() => onClick(index)}
            >
              {this.props.children}
            </Link>
        </div>
      </li>
    );    
  }
}

export default NavItem;