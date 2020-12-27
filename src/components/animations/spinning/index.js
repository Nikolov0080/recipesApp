import React from 'react'
import style from './index.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AnimatedProgressProvider from '../animationProvider';
import { easeQuadInOut } from "d3-ease";
const SpinningAnimation = ({ difficulty }) => {

    const percentage = difficulty * 10;

    return (
        <span>
            <span className={style.dif}>
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={percentage}
                    duration={2}
                    easingFunction={easeQuadInOut}
                // repeat
                >
                    {(value) => {

                        return <CircularProgressbar

                            text={`Skill(${Math.floor(Math.round(value) / 10)})`}
                            value={value}

                            styles={buildStyles({
                                rotation: (1 - percentage / 100) / 2,
                                strokeLinecap: "butt",
                                pathColor: '#f87',
                                textColor: '#000000',
                                trailColor: 'lightgray',
                                backgroundColor: '#f000000',
                            })}
                        />
                    }}
                </AnimatedProgressProvider>
            </span>
        </span>
    )
}

export default SpinningAnimation;