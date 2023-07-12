import React, {useEffect, useState} from 'react'
import {SearchInput} from "../cmps/search-input";
import {FundRecapCards} from "../cmps/fund-recap-cards";
import {Funds} from "../cmps/funds";
import {Cover} from "../cmps/cover";
import {AppHeader} from "../cmps/app.header";
import {loadFunds} from "../store/fund.action";
import {useSelector} from "react-redux";
import {FundsMain} from "../cmps/funds-main";
import {ChildrenFunds} from "../cmps/funds-speciality/children-funds";
import {ProvidentForInvestmentFunds} from "../cmps/funds-speciality/provident-for-investment-funds";
import {PensionFunds} from "../cmps/funds-speciality/pension-funds";
import {SavingsPolicyFunds} from "../cmps/funds-speciality/savings-policy-funds";
import {ProvidentFunds} from "../cmps/funds-speciality/provident-funds";
import {EducationFunds} from "../cmps/funds-speciality/education-funds";

export function HomePage() {
    const {funds} = useSelector((storeState) => storeState.fundModule);
    const [activeTab, setActiveTab] = useState('funds');

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
            <AppHeader setActiveTab={setActiveTab}/>
            <div className='main-content frame'>
                <Cover/>
                <FundRecapCards setActiveTab={setActiveTab}/>
                <SearchInput/>
            </div>

            {activeTab === 'funds' && <FundsMain funds={funds}/>}
            {activeTab === 'childrenFunds' && <ChildrenFunds childrenFunds={funds[0]}/>}
            {activeTab === 'providentForInvestmentFunds' &&
                <ProvidentForInvestmentFunds providentForInvestmentFunds={funds[1]}/>}
            {activeTab === 'educationFunds' && <EducationFunds educationFunds={funds[2]}/>}
            {activeTab === 'pensionFunds' && <PensionFunds pensionFunds={funds[3]}/>}
            {activeTab === 'savingsPolicyFunds' && <SavingsPolicyFunds savingsPolicyFunds={funds[4]}/>}
            {activeTab === 'providentFunds' && <ProvidentFunds providentFunds={funds[5]}/>}
        </section>
    )
}
