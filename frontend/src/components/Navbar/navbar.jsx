import React, { useContext, useRef } from 'react' 
import { useState } from 'react'
import logo from '../Assect/logo.png'
import cart_icon from '../Assect/cart_icon.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef()
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
        }
return (
   
<div className='navbar'>
    <div className='nav_logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
    </div>
   
    <ul ref={menuRef} className='nav_menu'>
    <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={() => { setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
     <li onClick={() => { setMenu("womens") }}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
     <li onClick={() => { setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <dev className="nav-login-cart">
    {localStorage.getItem('auth-token')
     ? <button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
    :<Link to='/login'><button>login</button></Link>}
    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
         <div className="nav-cart-count">{getTotalCartItems()}</div>
    </dev>
</div>
)
}
export default Navbar