import React from 'react';

const Simpson = ({props}) => {
    return (
        <div>
            <h2>{props.name} {props.surname}</h2>
            <p>Age: {props.age}</p>
            <img src={props.photo} alt={props.name}/>
            <p>Info: {props.info}</p>
            <hr/>
        </div>
    );
};

export default Simpson;