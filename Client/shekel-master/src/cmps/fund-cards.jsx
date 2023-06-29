import Card from 'react-bootstrap/Card';
import {CardGroup} from "react-bootstrap";

export function FundCards() {
    return (
        <section className='fund-cards'>
            <CardGroup dir='rtl'>
                <Card>
                    <Card.Body>
                        <Card.Title>חסכון לכל ילד</Card.Title>
                        <Card.Text>
                            מערכת קרנות חיסכון של מדינת ישראל המעניקה לילדים חשבון חיסכון משלהם להשקעה עתידית בתנאים יציבים וגמישים.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">למעבר מהיר</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>גמל להשקעה</Card.Title>
                        <Card.Text>
                            ארגון פנסיוני המשקיע ומנהל כספים שהופקדו על ידי החיים במגוון אפשרויות השקעה לצמיחה ויציבות היתרה הפנסיונית.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">למעבר מהיר</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>קרן השתלמות</Card.Title>
                        <Card.Text>
                            תכנית השתלמות שמסייעת להשגת השכלה והתמחות בתחומים שונים, עם מימון חלקי או מלא ללימודים בישראל או בחו"ל.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">למעבר מהיר</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup dir='rtl'>
                <Card>
                    <Card.Body>
                        <Card.Title>קרן פנסיה</Card.Title>
                        <Card.Text>
                            תכנית פנסיה פרטית המספקת הכנסה לאחר פרישה מהעבודה, ניהול על ידי קופות גמל או קרנות פנסיה עם השקעה תכנותית לעתיד.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">למעבר מהיר</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>קופת גמל</Card.Title>
                        <Card.Text>
                            ארגונים פנסיוניים פרטיים שניהלים תכניות פנסיוניות ומשקיעים את הכספים במגוון השקעות להבטחת כניסה פנסיונית יציבה.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">למעבר מהיר</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>השקעה אלטרנטיבית</Card.Title>
                        <Card.Text>
                            מקורות השקעה נוספים כמו BeTheBank ועוד.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">למעבר מהיר</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </section>
    )
}

