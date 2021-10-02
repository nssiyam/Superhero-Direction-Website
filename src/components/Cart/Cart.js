import React from 'react';
import Show from '../ShowName/Show';
import './Cart.css'


const Cart = (props) => {

    const { cart } = props;

    let totalSalary = 0;

    for (const people of cart) {
        totalSalary = totalSalary + people.Salary;
    }

    return (
        <div>
            <h3>Total Added - {cart.length}</h3>
            <h3>Total Cost - ${totalSalary}</h3>
            <br />

            {/* Showing Name in the Cart */}
            {
                cart.map(profile =>
                    <Show
                        key={profile.id}
                        name={profile.name}
                    ></Show>
                )
            }
        </div>
    );
};

export default Cart;