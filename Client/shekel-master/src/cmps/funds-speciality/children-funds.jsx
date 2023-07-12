export function ChildrenFunds({childrenFunds}) {
    console.log('childrenFunds', childrenFunds)

    return (
        <div className='fund-details frame'>
            {childrenFunds[0].map((fund, i) => {
                return (
                    <>
                        <p className={`p${i}`}>{fund.FUND_NAME}</p>
                    </>
                )
            })}
        </div>
    )
}
