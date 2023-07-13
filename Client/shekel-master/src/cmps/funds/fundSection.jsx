import React from "react";
import {TableDetails} from "./table-details";

export function FundSection({funds}) {
    return (
        <>
            <div className={`funds-performance flex`} key={`funds-div`}>
                {funds.map((fund, i) => {
                    return (
                        <>
                            <TableDetails funds={fund} i={i} key={`table-details-${i}`}/>
                        </>
                    )
                })}
            </div>
        </>
    )

}