import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Peoples.css'


const Peoples = (props) => {

    const { name, avatar, Location, Salary, Position, Contact } = props.people;

    return (
        <div className="grid">
            <div className="card">
                <img src={avatar} alt="" />
                <h3>{name}</h3>
                <p>Position: {Position}</p>
                <p>Location: {Location}</p>
                <p>Salary: ${Salary}</p>
                <p>Contact No: {Contact.slice(0, 11)}</p>
                <br />
                <button
                    onClick={() => { props.Add(props.people) }}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Team</button>
            </div>
        </div>
    );
};

export default Peoples;