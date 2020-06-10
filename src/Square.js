import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            clickHandler: this.props.onClick,
        };
    }

    render() {
        return (
            <button className="Square" onClick={() => this.state.clickHandler}>
                {this.state.value}
            </button>
        );
    }
}

export default Square;
