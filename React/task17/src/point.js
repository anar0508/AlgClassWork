import React from 'react';

function Point(props) {

    const { value, name, type, labelText, handle } = props;

    return (
        <div>
            <label htmlFor={name}> {labelText} </label>
            <input type={type} required name={name} value={value} id={name} onChange={(e) => handle(e.target.value, name)} />
        </div>
    );
}



export default Point;

