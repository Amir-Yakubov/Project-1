export function PensionFunds({pensionFunds}) {
    return (
        <div className='fund-details frame'>
            {pensionFunds[0].map((fund, i) => {
                return (
                    <>
                        <p className={`p${i}`}>{fund.FUND_NAME}</p>
                    </>
                )
            })}
        </div>
    )
}