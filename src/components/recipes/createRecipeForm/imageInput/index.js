import React,{useState} from 'react'
import InputFile from '../../../common/input/inputFile';
import ImagePreview from '../../../common/imagePreview_recipe/index';

const ImageInput = () => {

    const [file, setFile] = useState(false)

    return (
        <div>
            <InputFile name="image" func={ (e)=>setFile(e.target.files[0])}>
                <ImagePreview image={file}/>
            </InputFile>
        </div>
    )
}

export default ImageInput
