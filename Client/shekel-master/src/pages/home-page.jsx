import React from 'react'
import {SearchInput} from "../cmps/search-input";
import {FundRecapCards} from "../cmps/fund-recap-cards";
import {Funds} from "../cmps/funds";

export function HomePage() {
    return (
        <section className='home-page'>

            <div className='main-content frame'>
                <FundRecapCards/>
                <SearchInput/>
            </div>

            <div className='funds-container frame'>
                <Funds />
            </div>
        </section>
    )
}
