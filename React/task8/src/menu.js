import React, { Component } from 'react';
import './style.css'
import MenuPoint from './menuPoint';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    menuPointHandler = (e) => {
        const secs = 3;
        
        if (e.target.innerText === 'Создать файл') {
             this.setState({ message: 'Файл создан', show: true })
        } else if (e.target.innerText === 'Изменить файл') {
            this.setState({ message: 'Файл изменён', show: true })
        } else {this.setState({ message: 'Файл удалён', show: true })}

        setTimeout(()=>{
            this.setState({show:false})}, secs*1000)
    }

    handleStyle = () => {
        const { x, y, isVisible } = this.props;
        return {
            position: 'absolute',
            display: (isVisible ? 'block' : 'none'),
            left: x + 'px',
            top: y + 'px'
        }
    }

    render() {
        return (
            <div style={this.handleStyle()} className='menu'>
                <p className='menu-point' onClick={this.menuPointHandler}> Создать файл</p>
                <p className='menu-point' onClick={this.menuPointHandler}> Изменить файл</p>
                <p className='menu-point' onClick={this.menuPointHandler}> Удалить файл</p>
                <MenuPoint message={this.state.message} show={this.state.show} />
            </div>);
    }
}

export default Menu;