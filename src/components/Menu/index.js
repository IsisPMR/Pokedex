import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Menu extends Component {
    render(){
        return <nav style={{backgroundColor:"black"}}>
        <ul>
          <li>
          <Link to='/'>Search</Link>
          </li>
          <li>
          <Link to='/pokedex'>Pokedex</Link>
          </li>
          <li>
          <Link to='/profile'>Profile</Link>
          </li>
          {this.props.children}
        </ul>
      </nav>
    }
}

export default Menu