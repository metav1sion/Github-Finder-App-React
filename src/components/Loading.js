import React, {Component} from 'react';

class Loading extends Component {
    render() {
        return (
            <div className={"loading-container"}>
                <div className="spinner-border text-primary" role="status">

                </div>
            </div>
        );
    }
}

export default Loading;