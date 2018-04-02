import React, { Component } from 'react';
import {
    Col,
    Row, 
    Card
} from 'reactstrap';
import _ from 'lodash';

import ContractContent from './contract_content';

function ContractInput(props) {
    return (
        <Col md="3" className="input-wrapper">
            <Row>
                <Col md="2">
                    <label className="green-label">{props.index}</label>
                </Col>
                <Col md="10">
                    <input placeholder={props.placeholder} value={props.state} type='text' onChange={props.onChange} />
                </Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="10">
                    <div className="input-description">{props.placeholder}</div>
                </Col>
            </Row>
        </Col>
    );
}

class ContractForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            completedForm: false,
            photographer: '',
            model: '',
            date: '',
            sessionDate: '',
            signitureOne: '',
            signitureTwo: '',
            city: '',
            witness: ''
        }
    }

    handleChange = function(props) {
        return function(event) {
            // console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this);
    } 

    handleSubmit = function(event) {
        this.setState({completedForm: true});
        event.preventDefault();
    }.bind(this);
      
    
    handleClick = function() {
        this.setState({
            completedForm: false,
            photographer: '',
            model: '',
            date: '',
            sessionDate: '',
            signitureOne: '',
            signitureTwo: '',
            city: '',
            witness: ''
        });
    }.bind(this)
        
    renderButton = function() {
        if(this.state.completedForm) {
            return <a className="clear-button" onClick={this.handleClick}>Clear Contract</a>
        }
        return <input type="submit" className="generate-button" value="Generate Contract" /> 
    }
        

    render() {

        this.inputData = [
            {placeholder: 'Photographer', prop: 'photographer', state: this.state.photographer},
            {placeholder: 'Model', prop: 'model', state: this.state.model},
            {placeholder: 'Date', prop: 'date', state: this.state.date},
            {placeholder: 'Session Date', prop: 'sessionDate', state: this.state.sessionDate},
            {placeholder: 'Photographers Full Name', prop: 'signitureOne', state: this.state.signitureOne},
            {placeholder: 'Model Full Name', prop: 'signitureTwo', state: this.state.signitureTwo},
            {placeholder: 'City', prop: 'city', state: this.state.city},
            {placeholder: 'Witness Full Name', prop: 'witness', state: this.state.witness},
        ]
            
      return (
        <div className="card-wrapper">
            <Card>
                <form onSubmit={this.handleSubmit} id="contract-form">
                    <Row style={{textAlign: 'center', color: 'white'}}>
                        {
                            _.map(this.inputData, (data, indexKey) => {
                                return <ContractInput key={indexKey} index={indexKey + 1} state={data.state} placeholder={data.placeholder} onChange={this.handleChange({inputTitle: data.prop})} />
                            })
                        }
                    </Row>
                    <Row>
                        <Col md="12" className="button-wrapper">
                            {this.renderButton()}
                        </Col>
                    </Row>
                </form>
                <ContractContent data={this.state}/>
            </Card>
        </div>

      );
    }
  }

export default ContractForm;
 