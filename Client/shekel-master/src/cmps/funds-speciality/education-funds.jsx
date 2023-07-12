export function EducationFunds({educationFunds}) {
    return (
        <div className='fund-details frame'>
            {educationFunds[0].map((fund, i) => {
                return (
                    <>
                        <p className={`p${i}`}>{fund.FUND_NAME}</p>
                    </>
                )
            })}
        </div>
    )
}