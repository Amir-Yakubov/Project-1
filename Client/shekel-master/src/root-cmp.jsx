import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from "./pages/home-page";
import {SideNav} from "./cmps/side-nav";
import {UserDetails} from "./cmps/user-details";
import {Login} from "./cmps/login";

export function RootCmp() {
    return (
        <div>
            <main className={'main-container'}>
                <SideNav/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="auth/login" element={<Login/>}/>
                    <Route path="user/:id" element={<UserDetails/>}/>
                </Routes>
            </main>
        </div>
    )
}
