import React, { Component } from 'react';
import './counter.css';

class AppInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => { e.preventDefault(); this.props.filterByName(this.state.name); }}>
                    <label htmlFor="name">Введите имя для поиска</label>
                    <input className='text-input' type="text" id='name' value={this.state.name} onChange={this.handleChange} />
                    <input className='s-button' type='submit' />
                </form>
                <p>Выберите параметры фильтра</p>
                <div className='checkbox-container'>
                    <div className='checkbox-point'>
                        <label htmlFor="management"> Management </label>
                        <input className="point" onChange={() => { this.props.filterParam('Management') }} type="checkbox" id="management" />
                    </div>

                    <div className='checkbox-point'>
                        <label htmlFor="recruitment"> Recruitment </label>
                        <input className="point" onChange={() => { this.props.filterParam('Recruitment') }} type="checkbox" id="recruitment" />
                    </div>
                    <div className='checkbox-point'>
                        <label htmlFor="security"> Security </label>
                        <input className="point" onChange={() => { this.props.filterParam('Security') }} type="checkbox" id="security" />
                    </div>
                </div>
            </div >
        );
    }
}

export default AppInterface;