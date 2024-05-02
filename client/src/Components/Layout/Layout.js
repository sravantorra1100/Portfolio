import React from 'react'
import './Layout.css';
import Home from '../../Pages/Home/Home';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { useState } from 'react';
import Menus from '../Menus/Menus';

const Layout = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className="sidebar-section">
                <div className={  toggle?"sidebar-toggle sidebar" :"sidebar "}>
                    <div className="sidebar-toggle-icons">
                        
                        <p onClick={handleToggle}>
                        {toggle ? (<AiOutlineDoubleLeft size={30} />) : (<AiOutlineDoubleRight size={30} />)}
                    </p>
                    
                    </div>
                    <Menus toggle={toggle}/>
                </div>
                <div className="container">
                    <Home />

                </div>
            </div>
        </>
    )
}

export default Layout