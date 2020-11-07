import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';
const Search = () => {
    // TODO  find by name in db create functionality in API
    return (
        <div>
            <Form inline >
                <FormControl style={{ maxWidth: "70%" }} type="text" placeholder="Search" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    )
}

export default Search;