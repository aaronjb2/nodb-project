import React from 'react';
import './ShowDate.css';

const ShowDate = (props) => {
        return(
            <div className = 'box'><h1 className = 'text'>{props.date}</h1></div>
        );
}

export default ShowDate;