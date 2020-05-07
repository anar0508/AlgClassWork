import React, { Component } from 'react';
import TableContainer from './tableContainer';
import AppInterface from './appInterface'
import './counter.css';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            byDepartment: false,
            byName: false,
            departmentName: '',
            userName: ''
        }
    }

    drawTable = () => {
        const list = [...this.props.list];
        const { byName, byDepartment, departmentName, userName } = this.state;
        let rows;
        if (byDepartment === true) {
            return this.drawByDepartment(list, departmentName);
        }
        else if (byName === true) {
            return this.drawByName(list, userName);
        }
        else {
            rows = list.map((el, id) => {
                return (
                    <tr key={id}>
                        <td>{id + 1}</td>
                        <td> {el.name} </td>
                        <td> {el.department} </td>
                        <td> {el.role} </td>
                    </tr>
                )
            })
            return rows;
        }
    }

    drawByDepartment = (list, departmentName) => {
       let rows = list.filter(el => {
            return el.department === departmentName;
        }).map((el, id) => {
            return (
                <tr key={id}>
                    <td>{id + 1}</td>
                    <td> {el.name} </td>
                    <td> {el.department} </td>
                    <td> {el.role} </td>
                </tr>
            )
        })
        return rows;
    }

    drawByName = (list, userName) => {
       let rows = list.filter(el => {
            return (el.name).includes(userName);
        }).map((el, id) => {
            return (
                <tr key={id}>
                    <td>{id + 1}</td>
                    <td> {el.name} </td>
                    <td> {el.department} </td>
                    <td> {el.role} </td>
                </tr>
            )
        })
        return rows;
    }

    doFilter = (departmentName) => {
        if (this.state.byDepartment) {
            this.setState({
                byDepartment: false
            });
        } else {
            this.setState({
                departmentName: departmentName,
                byDepartment: true
            })
        }
    }

    doFilterByName = (name) => {
        if (this.state.byName) {
            this.setState({
                userName: '',
                byName: false
            });
        } else {
            this.setState({
                userName: name,
                byName: true
            })
        }
    }

    render() {

        return (
            <div className='container'>
                <AppInterface filterParam={this.doFilter} filterByName={this.doFilterByName} />
                <TableContainer template={this.drawTable} />
            </div>
        );
    }
}

export default Department;