import React, { Component } from 'react';
import ContractForm from './contract_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='backgroundSkew'>
          <div className="contract-heading">
            <h1>Contract Generator</h1>
            <div className="contract-subheading">
            Fill out the fields below and click the generate button <br/>to build a custom contract.
            </div>
          </div>
          <ContractForm />

        </div>
      </div>
    );
  }
} 
 