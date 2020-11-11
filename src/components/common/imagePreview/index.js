import React, { useState, useEffect } from 'react'
import defaultImage from './defaultImage.jpg';
import style from './imagePreview.module.css';

const messageAfterUpload = "Make sure the your face is visible!"
const messageBeforeUpload = "Click here to add photo of you"
const ImagePreview = ({ image }) => {

    const [uploadedImage, setUploadedImage] = useState(false);
    const [uploadCheck, setUploadCheck] = useState(false); // Boolean

    useEffect(() => [

        !!image !== false
            ?
            (setUploadedImage(URL.createObjectURL(image) , setUploadCheck(false)))
            :
            (setUploadedImage(defaultImage), setUploadCheck(true))
    ], [image])

    return (
        <div>
            <div className={style.image_container}>
                {uploadCheck === false
                    ? <p>{messageAfterUpload} </p>
                    : <p>{messageBeforeUpload} </p>}
                <img className={style.current_image} alt="profilePic" src={uploadedImage.toString()} />
            </div>
        </div>
    )
}

export default ImagePreview;