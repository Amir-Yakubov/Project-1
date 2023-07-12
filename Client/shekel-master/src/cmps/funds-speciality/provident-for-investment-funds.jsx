export function ProvidentForInvestmentFunds({providentForInvestmentFunds}) {
    return (
        <div className='fund-details frame'>
            {providentForInvestmentFunds[0].map((fund, i) => {
                return (
                    <>
                        <p className={`p${i}`}>{fund.FUND_NAME}</p>
                    </>
                )
            })}
        </div>
    )
}