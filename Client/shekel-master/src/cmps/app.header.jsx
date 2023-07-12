import React from "react";

export function AppHeader({setActiveTab}) {
    function setTabActive(teb){
        setActiveTab(teb);
    }

    return <div className='main-intro full'>
        <h1 className='main-title' onClick={() => setTabActive('funds')}>ShekelMaster</h1>
    </div>
}