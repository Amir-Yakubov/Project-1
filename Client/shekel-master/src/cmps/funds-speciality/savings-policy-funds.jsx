export function SavingsPolicyFunds({savingsPolicyFunds}) {
    return (
        <div className='fund-details frame'>
            {savingsPolicyFunds[0].map((fund, i) => {
                return (
                    <>
                        <p className={`p${i}`}>{fund.FUND_NAME}</p>
                    </>
                )
            })}
        </div>
    )
}