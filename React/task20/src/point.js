import React, { Component } from 'react';
import { Select } from 'antd';
import './style.css'

const { Option } = Select;

class Point extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { options, value, placeHolderText, handle } = this.props;
        let optArr = options.map(option => { return <Option value={option}>{option}</Option> });
        return (
            <Select
                showSearch
                style={{ width: 200}}
                placeholder={placeHolderText}
                onChange={(e) => handle(e)}
                value={value===''? undefined: value}
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {optArr}
            </Select>
        );
    }
}


export default Point;

