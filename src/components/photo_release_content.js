import React, { Component } from 'react';

class PhotoReleaseContent extends Component {
    render() {
        this.count = 1
        const data = this.props.data;
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>
                <div className="content-wrapper">
                    <body>
                        <h1>Photo Release</h1>
                    
                        
                        BETWEEN: {this.renderLabel(data.photographer)}<br/>
                            
                        AND: {this.renderLabel(data.model)}<br/>

                        Permission to Use Photograph<br/>

                        In consideration of use of photographs taken on {this.renderLabel(data.sessionDate)}<br/>

                        I grant to {this.renderLabel(data.signitureOne)}, its representatives and employees the right to take photographs of me and my property in connection with the above-identified subject. I authorize [insert organization], its assigns and transferees to copyright, use and publish the same in print and/or electronically.<br/> 
                        
                        I agree that {this.renderLabel(data.signitureOne)} may use such photographs of me with or without my name and for any lawful purpose, including for example such purposes as publicity, illustration, advertising, and Web content.<br/>
                        
                        I have read and understand the above:<br/>

                        Photographer:{this.renderLabel(data.photographer)} print name here Signature {this.renderLabel(data.signitureOne)}<br/>
                        Model :{this.renderLabel(data.model)} print name here Signature {this.renderLabel(data.signitureTwo)}(or parent or guardian)<br/>

                        If Model has not reached the Age of Majority, Parent or Guardian hereby gives their irrevocable permission to the photographer to use the photographs as outlined above. Parent or Guardian must sign above and PRINT Model’s Name below.<br/>
                        Youth’s Name {this.renderLabel(data.model)}<br/>
                        Witness Signature {this.renderLabel(data.witness)}<br/>
                    </body>
                 </div>
            </div>
        )
    }

    renderLabel = function(state) {
        return (
            <span>
                <label className="black-label">{this.count++}</label><b className="bold-text">{state}</b>
            </span>
        )
    }.bind(this);
} 

export default PhotoReleaseContent; 
 