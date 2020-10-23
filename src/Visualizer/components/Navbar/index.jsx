import React, { Component } from "react";

// STYLES
import "./styles.css";

// COMPONENTS
import NavItem from "./components/NavItem";
import Logo from './components/Logo';

const initialState = {
  elements: [],
  selected: null,
};

class Navbar extends Component {

  constructor(props) {
    super(props);
    
    this.state = initialState;

    this.handleClick = this.handleClick.bind(this);
    this.unselectAllElements = this.unselectAllElements.bind(this);
  }

  componentDidMount() {
    let items = this.props.items;
    let elements = [];
    items.forEach((element) => {
      elements.push({
        value: element.name,
        isSelected: false,
        icon: element.hasIcon ? element.iconName : '',
        url : element.url
      });
    });

    this.setState({ elements: elements });
  }

  unselectAllElements(){
    const lastIndex = this.state.selected;
    let elements = this.state.elements;
    if(lastIndex != null){
        elements[lastIndex].isSelected = false;
    }
    this.setState({ elements: elements, selected: null });
  }

  handleClick(index) {
    this.updateListItemColor(index);
  }

  updateListItemColor(index){
    const lastIndex = this.state.selected;

    if (index !== lastIndex) {
        let elements = this.state.elements;
        elements[index].isSelected = true;
  
        if (lastIndex != null) {
          elements[lastIndex].isSelected = false;
        }
  
        this.setState({ elements: elements, selected: index });
    }
  }

  render() {
    const elements = this.state.elements;

    const logoProps = {
      appName: this.props.appName,
      onBrandClick : () => this.unselectAllElements()
    };

    return (
      <div className="navbar">

        
        <Logo {...logoProps}/>
        
        <nav className="navbar_body">
          <ul className="items">
            {elements.map((element, index) => {
              return (
                <NavItem 
                    {...buildNavItemProps(element,index)}
                    key={index} onClick={(index) => this.handleClick(index)}
                >
                  {element.value}
                </NavItem>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

function buildNavItemProps(element, index){
    let props =  {
        index : index,
        isSelected : element.isSelected,
        iconName : element.icon,
        url : element.url
    };

    return props;
}

export default Navbar;