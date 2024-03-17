import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import React from "react";

export function TableDetails({funds, i}) {
    const speciality = ['רמת סיכון גבוה (בעיקר מניות)', 'רמת סיכון בינונית (עד 50% מניות)', 'רמת סיכון נמוכה (בעיקר אג"ח)'];

    function formatDateHebrew(date) {
        const monthNamesHebrew = [
            'ינואר',
            'פברואר',
            'מרץ',
            'אפריל',
            'מאי',
            'יוני',
            'יולי',
            'אוגוסט',
            'ספטמבר',
            'אוקטובר',
            'נובמבר',
            'דצמבר'
        ];
        const day = date.getDate();
        const month = date.getMonth();
        let relevantMonthName;
        if (day < 15) {
            const previousMonthIndex = month === 0 ? 11 : month - 2;
            relevantMonthName = monthNamesHebrew[previousMonthIndex];
        } else {
            relevantMonthName = monthNamesHebrew[month - 1];
        }
        return relevantMonthName;
    }

    return (
        <>
            {(funds && funds.length) && <Table striped bordered hover dir='rtl' className={`fund-table ${i}`}>
                <thead>
                <tr>
                    <td colSpan={6}>
                        <h5>{speciality[i]}</h5>
                        <h6>על בסיס תשואה מצטברת לפני דמי ניהול</h6>
                        <Link to='/'>shekelmaster.com</Link>
                    </td>
                </tr>
                <tr>
                    <th style={{width: '30%'}}>שם</th>
                    <th style={{width: '14%'}}>מספר</th>
                    {<th style={{width: '14%'}}>{formatDateHebrew(new Date(funds[0].CURRENT_DATE))}</th>}
                    <th style={{width: '14%'}}>שנה</th>
                    <th style={{width: '14%'}}>3 שנים</th>
                    <th style={{width: '14%'}}>5 שנים</th>
                </tr>
                </thead>
                <tbody>
                {funds.map((fund, i) => {
                    if (i > 2) return
                    return (
                        <tr key={`tr-${i}`}>
                            <td>{funds[i].FUND_NAME.slice(0, 25)}</td>
                            <td>{funds[i].FUND_ID}</td>
                            <td>{funds[i].MONTHLY_YIELD}%</td>
                            <td>{funds[i].YEAR_TO_DATE_YIELD}%</td>
                            <td>{funds[i].YIELD_TRAILING_3_YRS}%</td>
                            <td>{funds[i].YIELD_TRAILING_5_YRS}%</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>}
        </>
    )
}