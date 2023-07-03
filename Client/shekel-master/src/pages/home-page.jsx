import React, {useEffect} from 'react'
import {SearchInput} from "../cmps/search-input";
import {FundRecapCards} from "../cmps/fund-recap-cards";
import {Funds} from "../cmps/funds";
import {Cover} from "../cmps/cover";
import {AppHeader} from "../cmps/app.header";
import {loadFunds} from "../store/fund.action";
import {useSelector} from "react-redux";

export function HomePage() {
    const {funds} = useSelector((storeState) => storeState.fundModule)

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
            // showErrorMsg('Cannot load boards')
            console.log('Failed to load Funds')
        }
    }

    console.log(funds)
    return (
        <section className='home-page'>
            <AppHeader/>
            <div className='main-content frame'>
                <Cover/>
                <FundRecapCards/>
                <SearchInput/>
            </div>

            <div className='funds-container frame'>
                <Funds/>
            </div>
        </section>
    )
}
