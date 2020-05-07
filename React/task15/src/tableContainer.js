import React, { Component } from 'react';
import './counter.css';

class TableContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.template()}
                </tbody>
            </table>
        );
    }
}

export default TableContainer;