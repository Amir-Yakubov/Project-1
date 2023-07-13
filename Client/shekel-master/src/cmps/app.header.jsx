import React from "react";
import {Cover} from "./cover";
import {FundRecapCards} from "./fund-recap-cards";
import {SearchInput} from "./search-input";

export function AppHeader({setActiveTab}) {
    function setTabActive(teb) {
        setActiveTab(teb);
    }

    return (
        <>
            <div className='main-intro full'>
                <h1 className='main-title' onClick={() => setTabActive('funds')}>ShekelMaster</h1>
            </div>

            <div className='main-content frame'>
                <Cover/>
                <FundRecapCards setActiveTab={setActiveTab}/>
                <SearchInput/>
            </div>
        </>
    )
}