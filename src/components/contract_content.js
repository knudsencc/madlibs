import React, { Component } from 'react';

class ContractContent extends Component {
    render() {
        this.count = 1
        const data = this.props.data;
        return (
            <div className={data.completedForm ? 'showContent' : 'hideContent'}>
                <div className="content-wrapper">
                    <body>
                        <h1>MODEL AGREEMENT</h1>
                    
                        
                        BETWEEN: {this.renderLabel(data.photographer)}<br/>
                            
                        AND: {this.renderLabel(data.model)}<br/>
                        

                        In consideration of use of photographs taken on {this.renderLabel(data.sessionDate)} the receipt and sufficiency whereof is hereby acknowledged by the Model, both parties hereto agree as follows:<br/>

                        1. DESCRIPTION OF PHOTOGRAPHS<br/>
                        This Agreement applies to any and all photographs of the Model and the Model's Property made by the Photographer on the session dates covered by this agreement (noted below) and to all reproductions of such photographs (herein collectively called 'the Photographs').<br/>

                        2. USE OF THE PHOTOGRAPHS<br/>
                        The Model hereby consents to and authorizes the use of the Photographs by the Photographer and the Photographer's authorized representatives, licensees, successors, and assigns for any purpose whatsoeverincluding without limitation: sale, reproduction in all media, publication, display, broadcast and exhibition for promotion, advertising, trade, art or illustration. The Model agrees the Photographs may be used without further compensation for an unlimited time and that this Agreement is irrevocable.<br/>

                        3. OWNERSHIP AND RIGHTS IN THE PHOTOGRAPHS<br/>
                        The Model agrees that the Photographs, the copyright in the Photographs and all other rights in the Photographs or copies or reproductions thereof are the sole property of the Photographer and that the Photographer may protect the copyright or dispose of or authorize the use of any or all such rights in any manner whatsoever.<br/>

                        4. RELEASE OF PHOTOGRAPHER FROM LIABILITY<br/>
                        The Model releases the Photographer and all other persons entitled under this Agreement to use the Photographs. from all liability for libel, invasion of privacy, and all causes of action whatsoever in relation to the photographs their making and use, the Model or the Model's property including without limitation any liability for alteration of the Photographs, whether intentional or otherwise, that may occur during the making or subsequent use of the Photographs. The Model acknowledges reading the entire Agreement prior to signing and the Model is familiar with the contents.<br/>

                        IN WITNESS WHEREOF the Photographer and the Model or the model's parent or guardian have executed this Agreement, dated:<br/>

                        Photography session dates:<br/>
                        Photographer:{this.renderLabel(data.photographer)} print name here Signature {this.renderLabel(data.signitureOne)}<br/>
                        Model :{this.renderLabel(data.model)} print name here Signature {this.renderLabel(data.signitureTwo)}(or parent or guardian)<br/>

                        If Model has not reached the Age of Majority, Parent or Guardian hereby gives their irrevocable permission to the photographer to use the photographs as outlined above. Parent or Guardian must sign above and PRINT Model’s Name below.<br/>
                        Model’s Name {this.renderLabel(data.model)}<br/>
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

export default ContractContent; 
 