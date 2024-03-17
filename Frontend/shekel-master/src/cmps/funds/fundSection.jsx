import React from "react";
import {TableDetails} from "./table-details";

export function FundSection({fundSection, index}) {
    return (
        <>
            <div className={`funds-performance flex`} key={`funds-div-${index}`}>
                {fundSection.map((funds, i) => {
                    return (
                        <>
                            <TableDetails funds={funds} i={i} key={`table-details-${i}1`}/>
                        </>
                    )
                })}
            </div>
        </>
    )

}