export function ProvidentFunds({providentFunds}) {
    return (
        <div className='fund-details frame'>
            {providentFunds[0].map((fund, i) => {
                return (
                    <>
                        <p className={`p${i}`}>{fund.FUND_NAME}</p>
                    </>
                )
            })}
        </div>
    )
}