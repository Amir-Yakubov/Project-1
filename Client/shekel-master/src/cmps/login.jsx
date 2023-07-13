import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";

export function Login() {
    return <section className='login-signup'>
        <div className='login window frame'>
            <h1>התחבר</h1>
            <Form dir='rtl'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>מייל</Form.Label>
                    <Form.Control type="email" placeholder="הכנס כתובת מייל"/>
                    <Form.Text className="text-muted">
                        לעולם לא נשתף את פרטי המייל שלך
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>סיסמה</Form.Label>
                    <Form.Control type="password" placeholder="סיסמה"/>
                </Form.Group>
                <p>בלחיצה על הכפתור מטה אתה מאשר את התנאים הבאים: בלה בלה בלה</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="אני רוצה לקבל עדכונים למייל"/>
                    <Form.Check type="checkbox" label="אני מאשר את התנאים"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    התחבר
                </Button>
            </Form>
        </div>
    </section>
}