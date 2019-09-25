import React, { Component } from 'react';

class deleteBtn extends Component {
    render() {
        console.log(this.props);
        return (
            <button onClick={() => this.props.deleteItem(this.props.item.key)}>
                Delete
            </button>
        )
    }
}
export default deleteBtn;