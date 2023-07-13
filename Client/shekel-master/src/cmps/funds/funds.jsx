import {Loader} from "../loader";
import {FundSection} from "./fundSection";

export function Funds({funds}) {
    const sectors = ['חסכון לכל ילד', 'גמל להשקעה', 'קרנות השתלמות', 'קרנות פנסיה', 'פוליסות חסכון', 'קופות גמל'];
    return (
        <>
            <div className='funds-container frame' key={`funds-container`}>
                {(!funds.length || !funds) && <Loader key={'loader'}/>}
                {(funds.length) && funds.map((fund, i) => {
                    return (
                        <>
                            <h4 className={`title-${i}`} key={`funds-title-${i}`}>{sectors[i]}</h4>
                            <FundSection funds={fund} key={`fund-section-${i}`}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}