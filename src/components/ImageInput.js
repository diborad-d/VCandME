import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Input, TextArea, FormBtn } from "../components/Form"; 
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";


const styles ={
    imageBtnStyle: {
        width: "200px"
    }
}


class InputItem extends Component {

    
    constructor(props){
        super(props);

        this.state = {
            type: "",
            color: "",
            date: "",
            people: "",
            topOrBottom: "",
            image: "",
            email: "",
        };
    }

    componentDidMount(){

    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        let email = localStorage.getItem("currentUser");
    
          API.saveItem({
            title: this.state.type,
            color: this.state.color,
            date: this.state.date,
            people: this.state.people,
            topOrBottom: this.state.topOrBottom,
            image: this.state.image,
            email: email
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
      };


    render() {
        return(
        <Container fluid>
            <h2>Input Outfit Information</h2>
            <Input
                name="date"
                value={this.state.date}
                type="date"
                onChange={this.handleInputChange}
            />
            <Input
                name="color"
                value={this.state.color}
                placeholder="Enter Color"
                onChange={this.handleInputChange}
            />
            <Input
                name="people"
                value={this.state.people}
                placeholder="Enter People You Saw or Will See"
                onChange={this.handleInputChange}
            />
            <Input
                name="type"
                value={this.state.type}
                placeholder="Type (ie. shirt, blouse, sweater)"
                onChange={this.handleInputChange}
            />
            <Input
                name="topOrBottom"
                value={this.state.topOrBottom}
                placeholder="Top or Bottom"
                onChange={this.handleInputChange}
            />
            <input type="file" accept="image/*" capture='user' className="waves-effect waves-light btn"></input>
            <FormBtn onClick={this.handleFormSubmit}>
                Save Item
            </FormBtn>
        </Container>
        )
    }

}

export default InputItem;