import {useState} from "react";
import {updateProfileImage} from "src/store";
import {useThunk} from "src/hooks/useThunk";


const ImageUpload = () => {
    const [doUpdateProfileImage] = useThunk(updateProfileImage);
    const [img, setImg] = useState('');
    const imgFilehandler = (e) => {
        let img = e.target.files[0];
        setImg(URL.createObjectURL(img));
        if (img) {
            let record = new FormData();
            record.append('profile_image', img);
            doUpdateProfileImage(record);
        }
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