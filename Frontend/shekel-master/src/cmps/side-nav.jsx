import {NavLink} from "react-bootstrap";
import React from "react";

export function SideNav() {
    return <nav className='side-nav'>
        <NavLink href="/" className='side-nav-link'>
            <h6 className='main-title'>Shekel<br/>Master</h6>
        </NavLink>
        <NavLink href="auth/login" className='side-nav-link'>
            <div className='icon box-arrow-in-right'></div>
            <small className='label'>איזור אישי</small>
        </NavLink>
        <NavLink href="#child-fund" className='side-nav-link'>
            <div className='icon chart-up'></div>
            <small className='label'>חסכון
                <br/>
                לכל ילד</small>

        </NavLink>
        <NavLink href="#fund/gemel" className='side-nav-link'>
            <div className='icon wallet'></div>
            <small className='label'>גמל להשקעה</small>
        </NavLink>
        <NavLink href="#fund/heshtalmot" className='side-nav-link'>
            <div className='icon doc'></div>
            <small className='label'>קרנות השתלמות</small>
        </NavLink>
        <NavLink href="#fund/pension" className='side-nav-link'>
            <div className='icon cash'></div>
            <small className='label'>קרנות פנסיה</small>
        </NavLink>
        <NavLink href="#fund/savings" className='side-nav-link'>
            <div className='icon coins-up'></div>
            <small className='label'>פוליסות חסכון</small>
        </NavLink>
        <NavLink href="#fund/gemel2" className='side-nav-link'>
            <div className='icon chart'></div>
            <small className='label'>קופות<br/>גמל</small>
        </NavLink>
    </nav>
}