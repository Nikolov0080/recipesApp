import React from 'react'
import { Table } from 'react-bootstrap';
import style from './index.module.css'

const DirectionsList = ({ data, func, show }) => {

    if (!show) {
        return (
            <div>
                <div className={style.directions_head} onClick={() => func('directions')}>
                <h2>Directions <span>&#8595;</span> show</h2>
            </div>
            </div>
        )
    }

    return (
        <div>
            <div className={style.directions_head} onClick={() => func('directions')}>
                <h2>Directions <span>&#8593;</span> hide</h2>
            </div>
            <Table className="text-center" bordered hover>
                
                <tbody>
                    {data.map(({ stepData }, index) => {
                        return (

                            <tr key={index}>
                                <td><strong>Step - {index + 1}</strong></td>
                                <td>{stepData}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DirectionsList;