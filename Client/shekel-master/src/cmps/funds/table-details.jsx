import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import React from "react";

export function TableDetails({funds, i}) {
    let formattedDateTime;

    if (funds.length && funds[0].length) {
        const date = new Date(funds[0].CURRENT_DATE);
        formattedDateTime = formatDateHebrew(date);
    }

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

    const speciality = ['רמת סיכון גבוה (בעיקר מניות)', 'רמת סיכון בינונית (עד 50% מניות)', 'רמת סיכון נמוכה (בעיקר אג"ח)'];
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
                    <th style={{width: '14%'}}>{formattedDateTime}</th>
                    <th style={{width: '14%'}}>שנה</th>
                    <th style={{width: '14%'}}>3 שנים</th>
                    <th style={{width: '14%'}}>5 שנים</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{funds[0].FUND_NAME.slice(0, 25)}</td>
                    <td>{funds[0].FUND_ID}</td>
                    <td>{funds[0].MONTHLY_YIELD}%</td>
                    <td>{funds[0].YEAR_TO_DATE_YIELD}%</td>
                    <td>{funds[0].YIELD_TRAILING_3_YRS}%</td>
                    <td>{funds[0].YIELD_TRAILING_5_YRS}%</td>
                </tr>
                <tr>
                    <td>{funds[1].FUND_NAME.slice(0, 25)}</td>
                    <td>{funds[1].FUND_ID}</td>
                    <td>{funds[1].MONTHLY_YIELD}%</td>
                    <td>{funds[1].YEAR_TO_DATE_YIELD}%</td>
                    <td>{funds[1].YIELD_TRAILING_3_YRS}%</td>
                    <td>{funds[1].YIELD_TRAILING_5_YRS}%</td>
                </tr>
                <tr>
                    <td>{funds[2].FUND_NAME.slice(0, 25)}</td>
                    <td>{funds[2].FUND_ID}</td>
                    <td>{funds[2].MONTHLY_YIELD}%</td>
                    <td>{funds[2].YEAR_TO_DATE_YIELD}%</td>
                    <td>{funds[2].YIELD_TRAILING_3_YRS}%</td>
                    <td>{funds[2].YIELD_TRAILING_5_YRS}%</td>
                </tr>
                </tbody>
            </Table>}
        </>
    )
}