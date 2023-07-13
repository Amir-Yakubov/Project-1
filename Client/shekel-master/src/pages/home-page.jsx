import React, {useEffect, useState} from 'react'
import {AppHeader} from "../cmps/app.header";
import {loadFunds} from "../store/fund.action";
import {useSelector} from "react-redux";
import {Calculator} from "../cmps/calculator";
import {Funds} from "../cmps/funds/funds";

export function HomePage() {
    const {funds} = useSelector((storeState) => storeState.fundModule);
    const [activeTab, setActiveTab] = useState('funds');

    useEffect(() => {
            onLoadFunds();
        },
        []);

    async function onLoadFunds() {
        try {
            await loadFunds();
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
            <AppHeader setActiveTab={setActiveTab} key={'appHeader'}/>
            <Funds funds={funds} key={'funds'}/>
            <Calculator/>
        </section>
    )
}
