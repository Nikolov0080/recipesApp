import React, { useEffect, useState } from 'react'
import randomFacts from './list';
import { Button, Card } from 'react-bootstrap';
import style from './index.module.css'
const Facts = () => {

    const [fact, setFact] = useState('');

    useEffect(() => {
        setFact(randomFacts())
    }, [])

    const getFact = () => {
        setFact(randomFacts());
    }

    return (
        <div>
            <Card className={style.card}>
                <Card.Title> <h2>Random facts</h2></Card.Title>
                <Card.Text>{fact}</Card.Text>
               
                <Button className="mt-auto" variant="outline-primary"onClick={getFact}>Next</Button>
            </Card>
        </div>
    )
}

export default Facts;