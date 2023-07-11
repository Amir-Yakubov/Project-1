import React, {useEffect} from 'react'
import {SearchInput} from "../cmps/search-input";
import {FundRecapCards} from "../cmps/fund-recap-cards";
import {Funds} from "../cmps/funds";
import {Cover} from "../cmps/cover";
import {AppHeader} from "../cmps/app.header";
import {loadFunds} from "../store/fund.action";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router";
import {FundsMain} from "../cmps/funds-main";
import {ChildrenFunds} from "../cmps/funds-speciality/children-funds";
import {ProvidentForInvestmentFunds} from "../cmps/funds-speciality/provident-for-investment-funds";
import {PensionFunds} from "../cmps/funds-speciality/pension-funds";
import {SavingsPolicyFunds} from "../cmps/funds-speciality/savings-policy-funds";
import {ProvidentFunds} from "../cmps/funds-speciality/provident-funds";
import {EducationFunds} from "../cmps/funds-speciality/education-funds";

export function HomePage() {
    const {funds} = useSelector((storeState) => storeState.fundModule);

    useEffect(() => {
        onLoadFunds()
    }, [])

    async function onLoadFunds() {
        try {
            await loadFunds()
            if (!funds.length) {
                await loadFunds()
            }
        } catch (err) {
            console.log('Failed to load Funds')
        }
    }

    console.log('Funds', funds);
    return (
        <section className='home-page'>
            <AppHeader/>
            <div className='main-content frame'>
                <Cover/>
                <FundRecapCards/>
                <SearchInput/>
            </div>

            <FundsMain funds={funds}/>
        </section>
    )
}
