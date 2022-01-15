import React from 'react'
import styles from './Navbar.module.css';
import logo from '../images/brand.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
            <div className={styles.navbar}>
                <div className={styles.partie1}>
                    <a href='/'><img src={logo} alt='logo' /></a>
                    <a href='/'><div className={styles.brand}>MShoes</div></a>
                </div>
                <div className={styles.partie2}>                    
                        <div className={styles.home}><Link to="/">Home</Link></div>
                        <div className={styles.store}><Link to="/store">Store</Link></div>                    
                        <div className={styles.EditStore}><Link to="/editstore">Edit Store</Link></div>
                        <div className={styles.Panier}><Link to="/panier">Cart</Link></div>
                </div>
            </div>   
        
    );
}

export default Navbar
