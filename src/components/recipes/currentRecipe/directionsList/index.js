import React from 'react'
import style from './index.module.css'
import { Table } from 'react-bootstrap';


const DirectionsList = ({ data }) => {

    console.log(data);
    return (
        <div>
            <h2>Directions</h2>
            <Table className="text-center" bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Step</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ stepData }, index) => {
                        return(

                        <tr key={index}>
                            <td>{index+1}</td>
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