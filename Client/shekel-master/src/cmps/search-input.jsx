import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function SearchInput() {
    return (
        <>
            <InputGroup className="mb-3 main-search-input">
                <DropdownButton
                    variant="outline-secondary"
                    title=""
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">כל הקופות</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">חיפוש מתקדם</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" dir='rtl' placeholder='חפש קופה'/>
            </InputGroup>
        </>
    );
}