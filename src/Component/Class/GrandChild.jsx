import React, { Component } from 'react'

export default class GrandChild extends Component {
    render() {
        return (
            <div>
                <p>GrandChild</p>
                <p>{this.props.data}</p>
            </div>
        )
    }
}
