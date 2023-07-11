import {Funds} from "./funds";
import React from "react";

export function FundsMain({funds}){
    return <div className='funds-container frame'>
        <Funds funds={funds}/>
    </div>
}