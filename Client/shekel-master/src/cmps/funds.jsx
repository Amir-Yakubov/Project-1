import {FundTables} from "./fund-tables";
import React from "react";

export function Funds({funds}) {
    const sectors = ['חסכון לכל ילד', 'גמל להשקעה', 'קרנות השתלמות', 'קרנות פנסיה', 'פוליסות חסכון', 'קופות גמל'];
    return (
        <>
            {funds.map((fund, i) => {
                return (
                    <>
                        <h4 className={`title-${i}`}>{sectors[i]}</h4>
                        <div className='funds-performance flex'>
                            {(funds[i] && funds[i].length > 0) && <FundTables funds={funds[i]}/>}
                        </div>
                    </>
                )
            })}
        </>
    )

}