import React from 'react';
import '../components/Header.css';
import logo from '../assets/logo.png'


export default function Header() {
    return (   
   <div className="header">
   <div className="logo">
    <img src={logo} width="48px"/>
    <span className="siteName">SHELFIE
    </span>
   </div>
   
   </div>
        
    )
}