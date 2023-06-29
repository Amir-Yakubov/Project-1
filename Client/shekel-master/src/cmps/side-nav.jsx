import {NavLink} from "react-bootstrap";
import React from "react";
import {default as boxArrowInRightIcon} from '../assets/img/box-arrow-in-right.svg'
import {default as chartUpIcon} from '../assets/img/chart-up.svg'
import {default as chartIcon} from '../assets/img/chart.svg'
import {default as walletIcon} from '../assets/img/wallet.svg'
import {default as docIcon} from '../assets/img/doc.svg'
import {default as cash} from '../assets/img/cash.svg'
import {default as coinsUpIcon} from '../assets/img/coins-up.svg'
import {default as logo} from '../assets/img/logo4.png'

export function SideNav() {
    return <nav className='side-nav'>
        <NavLink to="/" className='side-nav-link'>
            <img className="logo" src={logo} alt='logo'/>
        </NavLink>
        <NavLink to="auth/login" className='side-nav-link'>
            <img className="icon-link" src={boxArrowInRightIcon} alt='icon'/>
            <br/>
            איזור אישי
        </NavLink>
        <NavLink to="#child-fund" className='side-nav-link'>
            <img className="icon-link" src={chartUpIcon} alt='icon'/>
            <br/>
            חסכון לכל ילד
        </NavLink>
        <NavLink to="#fund/gemel" className='side-nav-link'>
            <img className="icon-link" src={walletIcon} alt='icon'/>
            <br/>
            גמל להשקעה
        </NavLink>
        <NavLink to="#fund/heshtalmot" className='side-nav-link'>
            <img className="icon-link" src={docIcon} alt='icon'/>
            <br/>
            קרן השתלמות
        </NavLink>
        <NavLink to="#fund/pension" className='side-nav-link'>
            <img className="icon-link" src={cash} alt='icon'/>
            <br/>
            קרן פנסיה
        </NavLink>
        <NavLink to="#fund/savings" className='side-nav-link'>
            <img className="icon-link" src={coinsUpIcon} alt='icon'/>
            <br/>
            חסכון פרט
        </NavLink>
        <NavLink to="#fund/gemel2" className='side-nav-link'>
            <img className="icon-link" src={chartIcon} alt='icon'/>
            <br/>קופת גמל
        </NavLink>
    </nav>
}