import React, { Component } from 'react';
import axios from 'axios';
import {Input, FormBtn, DropDown } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: '',
            color: '',
            picture: "",
            type: "",
            dateWorn: "",
            peopleSeen: "",
            topOrBottom: "",
            brand: "",
            email: ""
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        let email = localStorage.getItem("currentUser") || "";
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        

        axios.post("http://localhost:4000/api/item-profile", formData, {
        }).then(res => {
            console.log(res);
            let imgSrc = res.data.itemCreated.profileImg;

            let dataToSend = {
                color: this.state.color,
                picture: imgSrc,
                type: this.state.type,
                dateWorn: this.state.dateWorn,
                peopleSeen: this.state.peopleSeen,
                topOrBottom: this.state.topOrBottom,
                brand: this.state.brand,
                email: email
            }

            console.log(dataToSend);

            axios.post("http://localhost:4000/api/save-garment", dataToSend, {
            }).then(res => {
                console.log(res)
            })
    
        }).catch(err => console.log(err));
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    render() {
        return (
        <Container fluid>
            <h2>Input Outfit Information</h2>
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <Input
                            name="brand"
                            value={this.state.brand}
                            placeholder="Enter Brand"
                            onChange={this.handleInputChange}
                        />
                        <Input
                            name="color"
                            value={this.state.color}
                            placeholder="Enter Color"
                            onChange={this.handleInputChange}
                        />
                        <Input
                            name="dateWorn"
                            label="Date Worn"
                            value={this.state.dateWorn}
                            type="date"
                            onChange={this.handleInputChange}
                        />
                        <Input
                            name="peopleSeen"
                            value={this.state.peopleSeen}
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
                        
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
        )
    }
}