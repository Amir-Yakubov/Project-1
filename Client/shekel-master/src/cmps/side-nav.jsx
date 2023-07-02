import {NavLink} from "react-bootstrap";
import React from "react";
import {default as chartUpIcon} from '../assets/img/white/chart-up.svg'
import {default as chartIcon} from '../assets/img/white/chart.svg'
import {default as walletIcon} from '../assets/img/white/wallet.svg'
import {default as docIcon} from '../assets/img/white/doc.svg'
import {default as cash} from '../assets/img/white/cash.svg'
import {default as coinsUpIcon} from '../assets/img/white/coins-up.svg'

export function SideNav() {
    return <nav className='side-nav'>
        <NavLink to="/" className='side-nav-link'>
            <h6 className='main-title'>Shekel<br />Master</h6>
        </NavLink>
        <NavLink to="auth/login" className='side-nav-link'>
            <div className='icon box-arrow-in-right'></div>
            איזור אישי
        </NavLink>
        <NavLink to="#child-fund" className='side-nav-link'>
            <div className='icon chart-up'></div>
            חסכון
            <br />
            לכל ילד
        </NavLink>
        <NavLink to="#fund/gemel" className='side-nav-link'>
            <div className='icon wallet'></div>
            גמל להשקעה
        </NavLink>
        <NavLink to="#fund/heshtalmot" className='side-nav-link'>
            <div className='icon doc'></div>
            קרנות השתלמות
        </NavLink>
        <NavLink to="#fund/pension" className='side-nav-link'>
            <div className='icon cash'></div>
            קרנות פנסיה
        </NavLink>
        <NavLink to="#fund/savings" className='side-nav-link'>
            <div className='icon coins-up'></div>
            פוליסות חסכון
        </NavLink>
        <NavLink to="#fund/gemel2" className='side-nav-link'>
            <div className='icon chart'></div>
            קופות<br />גמל
        </NavLink>
    </nav>
}