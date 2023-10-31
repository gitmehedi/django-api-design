import {useState} from "react";

const ImageUpload = () => {
    const [img, setImg] = useState('')
    const imgFilehandler = (e) => {
        let img = e.target.files[0];
        setImg(URL.createObjectURL(img));
    }

    return (
        <>
            <h1>Image Upload</h1>
            <div>
                <center>
                    <h2>Upload</h2>
                    <input type="file" onChange={imgFilehandler}/>
                    <hr/>
                    <h2>Preview</h2>
                    {img && <img src={img} height="200" width="200" alt="med1"/>}
                </center>
            </div>
        </>
    );
}

export {ImageUpload};