import React from "react";
import {TableDetails} from "./table-details";

export function FundTables({funds}) {
    return (
        <>
            {funds.map((fund, i) => {
                return (
                    <>
                        <TableDetails funds={fund} i={i}/>
                    </>
                )
            })}
        </>
    )
}

