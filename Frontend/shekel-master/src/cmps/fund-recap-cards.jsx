import React from "react";
import {Link} from "react-router-dom";

export function FundRecapCards({setActiveTab}) {

    function setTabActive(tab) {
        setActiveTab(tab);
    }

    return (
        <section className='fund-cards'>
            <div className='cards-wrapper flex'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => setTabActive('providentFunds')}>קופות גמל</h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => setTabActive('savingsPolicyFunds')}>פוליסות חסכון</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => setTabActive('pensionFunds')}>קרנות פנסיה</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => setTabActive('educationFunds')}>קרנות השתלמות</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => setTabActive('providentForInvestmentFunds')}>גמל
                            להשקעה</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => setTabActive('childrenFunds')}>חסכון לכל ילד</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

