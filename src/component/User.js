import React from 'react';
import firebase from './Firestore';



class User extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            email: '',
            name: '',
            textarea: ''
        };
    }
    updateInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        // database connection to cloud firestore 
        const db = firebase.firestore();
        db.settings({
        });
        // create a table(collection) called 'users' in cloud firestore in order to store info
          db.collection('users').add({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        });  
        this.setState({
          name: '',
          email: '',
          textarea: ''
        });
      };


      render() {
        return (
        
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Easy web.</h3>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-12">
 
            <form 
                onSubmit={this.addUser} 
                id="contactForm" 
                name="sentMessage" 
                noValidate="noValidate">

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">

                    <input 
                        className="form-control"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={this.updateInput}
                        value={this.state.name}
                    /> 
                    <p className="help-block text-danger"></p>
                    </div>

                    <div className="form-group">
                        <input 
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={this.updateInput}
                            value={this.state.email}
                        />
                        <p className="help-block text-danger"></p>
                    </div>
                  </div>


                <div className="col-md-6">
                  <div className="form-group">

                    <textarea 
                    className="form-control"
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Message" 
                    onChange={this.updateInput}
                    value={this.state.message}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>

                    <button 
                    id="sendMessageButton" 
                    className="btn btn-primary btn-xl text-uppercase"
                    type="submit">Send Message</button>
                  </div>
                </div>
            </form>
            </div>
            </div>
            </div>
          
            </section>
    
            );
          }
       }
    export default User;