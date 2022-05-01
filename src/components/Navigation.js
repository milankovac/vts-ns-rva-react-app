import '../styles/Navigation.css'
import React from 'react';
export default class Navigation extends React.Component {
    hamburger(){
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    render() {
    return (
        <div className="topnav" id="myTopnav" >
            <a href="#home">HOME</a>
            <a href="#films">FILMS</a>
            <a href="#news">NEWS</a>
            <a href="#contact">CONTACT</a>
            <span className="icon" onClick={() => this.hamburger()}>
                <i className="fa fa-bars"></i>
            </span>
        </div>
    );
    }
}
