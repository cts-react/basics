import { Component } from "react";

export default class DropdownMenuClass extends Component {
    state = {
      isOpen: false,
    };
  
    handleClick = () => {
      this.setState((state) => {
        return { isOpen: !state.isOpen };
      });
    };
  
    render() {
      let menu;
      if (this.state.isOpen) {
        menu = (
          <ul>
            <li>Edit</li>
            <li>Remove</li>
            <li>Archive</li>
          </ul>
        );
      }
      return (
        <div>
          <button onClick={this.handleClick}>Actions</button>
          {menu}
        </div>
      );
    }
  }
  