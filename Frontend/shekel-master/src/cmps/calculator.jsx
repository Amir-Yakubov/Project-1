import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";

export function Calculator() {

    function getValues() {
    }

    function gemelCalculator() { // חישוב והדפסת התוצאה הסופית
        let inputValues = getValues();
        let rate = parseFloat(inputValues.monthlyRate);
        let nper = parseFloat(inputValues.months);
        let pmt = parseFloat(inputValues.monthlyPay);
        let pv = parseFloat(inputValues.amount);
        let fv = Number(pv);

        if (nper == 0) { // בדיקה למנוע מצב של 0 שנים
            return (0);
        }

        if (rate == 0) {  // מצב של ריבית 0
            fv = -(pv + (pmt * nper));
        }

        if (pmt == 0) {  // מצב של הפקדה חודשית 0
            for (let i = 0; i < nper; i++) {
                fv = fv + (fv * rate);
            }
            fv = fv.toFixed(0);
            fv = numberWithCommas(fv);
            pv = numberWithCommas(pv);
            pmt = numberWithCommas(pmt);
        }

        if (pv == 0) {  // במצב של הפקדה חד פעמית 0
            for (let i = 0; i < nper; i++) {
                fv = fv + pmt + (fv * rate);
            }
            fv = fv.toFixed(0);
            fv = numberWithCommas(fv);
            pv = numberWithCommas(pv);
            pmt = numberWithCommas(pmt);
        }

        if (rate > 0 && nper > 0 && pmt > 0 && pv > 0) { // נוסחה לחישוב הסכום הסופי עם ערכים חיובים וגדולים מ0
            const x = Math.pow(1 + rate, nper);
            fv = -(-pmt + x * pmt + rate * x * pv) / rate;
            fv = (fv * -1).toFixed(0);
            fv = numberWithCommas(fv);
            pv = numberWithCommas(pv);
            pmt = numberWithCommas(pmt);
        }
    }

    function numberWithCommas(num) { // פונקציה להצגת פסיקים במספרים
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return <section className='calculator frame'>
        <h2>מחשבון גמל להשקעה</h2>
        <h5>ממש פה אפשר לחשב איך להגשים חלום</h5>

        <div dir='rtl' className='form-wrap'>
            <Form>
                <Form.Group>
                    <Form.Label>הפקדה חד פעמית</Form.Label>
                    <Form.Control type="number" placeholder="הפקדה חד פעמית"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>לכמה שנים</Form.Label>
                    <Form.Control type="number" placeholder="לכמה שנים"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>הפקדה חודשית</Form.Label>
                    <Form.Control type="number" placeholder="הפקדה חודשית"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>תשואה שנתית</Form.Label>
                    <Form.Control type="number" placeholder="תשואה שנתית"/>
                </Form.Group>
                <Button className='calculator-btn' variant="success" type="submit">
                    כמה מגיע לי?
                </Button>
            </Form>
        </div>

    </section>
}
