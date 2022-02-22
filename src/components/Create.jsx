import React, { Component } from 'react';
import Firebase from '.'
class Create extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('boards');
        this.state = {
          title: '',
          description: '',
          author: ''
        };
      }
   
   
   
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Create;