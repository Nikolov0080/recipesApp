import React from 'react'
import InputFile from '../../../common/input/inputFile';
import ImagePreview from '../../../common/imagePreview_recipe/index';

const ImageInput = ({func , file}) => {

    return (
        <div>
            <InputFile name="image" func={ (e)=>func(e.target.files[0])}>
                <ImagePreview image={file}/>
            </InputFile>
        </div>
    )
}

export default ImageInput
