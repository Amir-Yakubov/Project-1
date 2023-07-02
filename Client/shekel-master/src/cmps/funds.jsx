import {FundTables} from "./fund-tables";
import React from "react";

export function Funds() {
    return (
        <>
            <h4>חסכון לכל ילד</h4>
            <div className='funds-performance flex'>
                <FundTables/>
            </div>
            <hr/>
            <h4>גמל להשקעה</h4>
            <div className='funds-performance flex'>
                <FundTables/>
            </div>

            <hr/>
            <h4>קרנות השתלמות</h4>
            <div className='funds-performance flex'>
                <FundTables/>
            </div>

            <hr/>
            <h4>קרנות פנסיה</h4>
            <div className='funds-performance flex'>
                <FundTables/>
            </div>

            <hr/>
            <h4>פוליסות חסכון</h4>
            <div className='funds-performance flex'>
                <FundTables/>
            </div>

            <hr/>
            <h4>קופות גמל</h4>
            <div className='funds-performance flex'>
                <FundTables/>
            </div>
        </>
    )

}