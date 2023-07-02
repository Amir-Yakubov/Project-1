import React from "react";
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";

export function FundTables() {
    return (
        <>
        <Table striped bordered hover dir='rtl' className='fund-table'>
            <thead>
            <td colSpan={5}>
            <h5>רמת סיכון נמוכה (בעיקר אג"ח)</h5>
                <h6>על בסיס תשואה מצטברת לפני דמי ניהול</h6>
                <Link to='/' >shekelmaster.com</Link>
            </td>
            <tr>
                <th>שם</th>
                <th>מאי</th>
                <th>שנה</th>
                <th>3 שנים</th>
                <th>5 שנים</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>ילין לפידות קרן השתלמות</td>
                <td>1.65%</td>
                <td>2.16%</td>
                <td>40.40%</td>
                <td>48.92%</td>
            </tr>
            <tr>
                <td>אנליסט השתלמות מניות</td>
                <td>2.22%</td>
                <td>1.31%</td>
                <td>38.78%</td>
                <td>61.90%</td>
            </tr>
            <tr>
                <td>מגדל השתלמות מניות</td>
                <td>0.01%-</td>
                <td>1.98%-</td>
                <td>32.76%</td>
                <td>35.03%</td>
            </tr>
            </tbody>
        </Table>
        <Table striped bordered hover dir='rtl'>
            <thead>
            <td colSpan={5}>
                <h5>רמת סיכון בינונית (עד 50% מניות)</h5>
                <h6>על בסיס תשואה מצטברת לפני דמי ניהול</h6>
                <Link to='/' >shekelmaster.com</Link>
            </td>
            <tr>
                <th>שם</th>
                <th>מאי</th>
                <th>שנה</th>
                <th>3 שנים</th>
                <th>5 שנים</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>ילין לפידות קרן השתלמות</td>
                <td>1.65%</td>
                <td>2.16%</td>
                <td>40.40%</td>
                <td>48.92%</td>
            </tr>
            <tr>
                <td>אנליסט השתלמות מניות</td>
                <td>2.22%</td>
                <td>1.31%</td>
                <td>38.78%</td>
                <td>61.90%</td>
            </tr>
            <tr>
                <td>מגדל השתלמות מניות</td>
                <td>0.01%-</td>
                <td>1.98%-</td>
                <td>32.76%</td>
                <td>35.03%</td>
            </tr>
            </tbody>
        </Table>
        <Table striped bordered hover dir='rtl'>
            <thead>
            <td colSpan={5}>
                <h5>רמת סיכון גבוה (בעיקר מניות)</h5>
                <h6>על בסיס תשואה מצטברת לפני דמי ניהול</h6>
                <Link to='/' >shekelmaster.com</Link>
            </td>
            <tr>
                <th>שם</th>
                <th>מאי</th>
                <th>שנה</th>
                <th>3 שנים</th>
                <th>5 שנים</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>ילין לפידות קרן השתלמות</td>
                <td>1.65%</td>
                <td>2.16%</td>
                <td>40.40%</td>
                <td>48.92%</td>
            </tr>
            <tr>
                <td>אנליסט השתלמות מניות</td>
                <td>2.22%</td>
                <td>1.31%</td>
                <td>38.78%</td>
                <td>61.90%</td>
            </tr>
            <tr>
                <td>מגדל השתלמות מניות</td>
                <td>0.01%-</td>
                <td>1.98%-</td>
                <td>32.76%</td>
                <td>35.03%</td>
            </tr>
            </tbody>
        </Table>
        </>
    )
}

