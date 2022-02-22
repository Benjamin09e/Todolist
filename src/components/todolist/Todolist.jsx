import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todolist.css';
import  './new/New';
import  './liste/Liste';

 


class Todolist extends Component {
    render() {
        return (
            <div>
                <header />
                <ul>
                    <New text='Hit the gym' myclass="checked" />
                    <New text='Hit the gym' myclass="checked"/>
                    <New text='Hit the gym' myclass="checked"/>
                    <New text='Hit the gym' myclass="checked"/>
                    <New text='Hit the gym' myclass="checked"/>
                </ul>
            </div>
            
        );
    }
}

export default connect(
    mapStateToProps,
)(Todolist);