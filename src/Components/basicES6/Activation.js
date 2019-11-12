import React, { Component } from "react";
import { Button } from 'reactstrap';

class Activation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qr: "abc"
        };

        this.handleActivateClick = this.handleActivateClick.bind(this);
    }

    handleActivateClick(e) {
        console.log(e.target.value);
        this.props.onStatusChange(true);
    }

    render() {
        const isActivated = this.props.isActivated;
        return (
            <div>
                <h1>
                    Activate this Mactiv Box
                </h1>
                <Button value={isActivated} onClick={this.handleActivateClick}>Activate</Button>
            </div>
        );
    }
}

Activation.propTypes = {

};

export default Activation;