import React from 'react'
import {Routes, Route} from 'react-router'
import {HomePage} from "./pages/home-page";
import {SideNav} from "./cmps/side-nav";
import {UserDetails} from "./cmps/user-details";
import {Login} from "./cmps/login";
import {FundsMain} from "./cmps/funds-main";
import {ChildrenFunds} from "./cmps/funds-speciality/children-funds";
import {ProvidentForInvestmentFunds} from "./cmps/funds-speciality/provident-for-investment-funds";
import {EducationFunds} from "./cmps/funds-speciality/education-funds";
import {PensionFunds} from "./cmps/funds-speciality/pension-funds";
import {SavingsPolicyFunds} from "./cmps/funds-speciality/savings-policy-funds";
import {ProvidentFunds} from "./cmps/funds-speciality/provident-funds";

export function RootCmp() {
    return (
        <div>
            <main className={'main-container'}>
                <SideNav/>
                <Routes>
                    <Route path="/" element={<HomePage/>}>
                        <Route path="/" element={<FundsMain/>}/>
                        <Route path="/children-funds" element={<ChildrenFunds/>}/>
                        <Route path="/provident-for-investment-funds" element={<ProvidentForInvestmentFunds/>}/>
                        <Route path="/education-funds" element={<EducationFunds/>}/>
                        <Route path="/pension-funds" element={<PensionFunds/>}/>
                        <Route path="/savings-policy-funds" element={<SavingsPolicyFunds/>}/>
                        <Route path="/provident-funds" element={<ProvidentFunds/>}/>
                    </Route>
                    <Route path="auth/login" element={<Login/>}/>
                    <Route path="user/:id" element={<UserDetails/>}/>
                </Routes>
            </main>
        </div>
    )
}
