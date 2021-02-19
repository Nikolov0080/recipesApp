import React from 'react'
import style from './footer.module.css';

const Linkedin = () => {
    return (
        <div>
            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/%D0%B6%D0%B8%D0%B2%D0%BA%D0%BE-%D0%BD%D0%B8%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2-24b5a8191/">
                <img className={style.link} alt="linkedin_icon" src="https://res.cloudinary.com/recepsbg/image/upload/v1613763276/social_icons/link_yd7d1l.png"/>
            </a>
        </div>
    )
}

export default Linkedin;