import React from 'react'
import style from './index.module.css'
import { CircularProgressbar, buildStyles, prog } from 'react-circular-progressbar';

const SpinningAnimation = ({ difficulty }) => {
    return (
        <span>


            <span className={style.dif}>
                <CircularProgressbar

                    text={`Skill(${difficulty})`}
                    value={difficulty * 10}

                    styles={buildStyles({
                        rotation: (1 - difficulty * 10 / 100) / 2,
                        strokeLinecap: "butt",
                        pathColor: '#f87',
                        textColor: '#000000',
                        trailColor: 'lightgray',
                        backgroundColor: '#f000000',
                    })}


                />
            </span>
        </span>


    )
}

export default SpinningAnimation
