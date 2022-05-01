import '../styles/ContactForm.css'
import React from 'react';
export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: "" , lastName: "" ,};
        }
    openModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    closeModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    render() {
        return (
            <div className='containerContainer' id='contact'>
                <form className='form'>

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e) => this.setState({firstName : e.target.value})} />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."  onChange={(e) => this.setState({lastName : e.target.value})}/>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="button" value="Submit" onClick={() => this.openModal()} />

                </form>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => this.closeModal()} >&times;</span>
                        <p className='content'>{this.state.firstName} {this.state.lastName} <br></br>Thank you, we have received your email! We are busy with a response and our customer service team will reach out within 2 of hours.</p>
                        <img src='./images/marvel.gif' alt='gif' />
                    </div>

                </div>
            </div>
        );
    }
}
