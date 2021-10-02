import React, { useEffect, useState } from 'react';
import '../../components/Parent/Parent.css';
import Cart from '../Cart/Cart';
import Peoples from '../Peoples/Peoples';

const Parent = () => {
    
    const [peoples, setPeoples] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./Persons.json')
            .then(res => res.json())
            .then(data => setPeoples(data));

    }, [])

    const CartFunc = (peoples) => {
        
        let NewCart = [...cart]
        
        if (NewCart.indexOf(peoples) === -1) {
            NewCart = [...cart, peoples]
        }
        
        setCart(NewCart);
    }

    return (
        <div className="parent-container">   

            <div className="child-container">

                {/* Showing People Card */}
                {
                    peoples.map(people => <Peoples
                        key={people.id}
                        people={people}
                        Add={CartFunc}
                    ></Peoples>)
                }
            </div>
            
            {/* Showing Cart Card */}
            <div className="added-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Parent;