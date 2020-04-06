import './liste.css';
import React, { Component } from 'react';
//import bgimage from "../../assets/img/logo.png";// ici tu mis le lien vers logo, c ou logo ??? voila donc tu ajoutes le lien 


class Liste extends Component {
    render() {
        return (

            <header>

                <div id="myDIV" className="header">
                    <h2 style={{ margin: 5 + 'px' }}>My To Do List</h2>
                    <form>
                        <input type="text" id="myInput" placeholder="Title..." />
                        <span className="addBtn">Add</span>
                    </form>
                </div>
            </header>
           
               
           

        );
    }
}

export default Liste;