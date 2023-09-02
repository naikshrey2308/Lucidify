import { memo, useRef, useState } from "react";
import { MdDownload, MdImageSearch, MdOutlineAddCircle, MdUpload } from "react-icons/md";
import "./Dehaze.css";
import axios from "axios";

function Dehazer() {

    const [toggleUploader, setToggleUploader] = useState(true);
    const [loading, setLoading] = useState(false);

    const uploadImageRef = useRef();
    const formImageRef = useRef();
    const imageDisplayRef = useRef();
    const imageDisplayRef2 = useRef();
    const downloadRef = useRef();
    const imageHolder = useRef();

    async function dehaze(again=false, indoor=true) {    
        imageHolder.current.classList.replace("d-block", "d-none");
        setLoading(true);

        const formdata = new FormData();
        formdata.append("input-image", formImageRef.current.files[0]);
        let res;
        if(again) {
            formdata.append("indoor", indoor);
            res = await axios.post("http://localhost:8000/api/dehaze/maxim", formdata);
        }
        else
            res = await axios.post("http://localhost:8000/api/dehaze/minim", formdata);
        // console.log(res.data);
        setLoading(false);
        imageDisplayRef2.current.src = "data:image/png;base64," + res.data.dehazed_image_data;
        // imageDisplayRef2.current.src = imageDisplayRef.current.src;
        imageHolder.current.classList.replace("d-none", "d-block");
    }
    
    function renderImage() {
        setToggleUploader(false);
        const imageUrl = URL.createObjectURL(formImageRef.current.files[0]);
        imageDisplayRef.current.src = imageUrl;
        dehaze();
    }

    function downloadImage() {
        downloadRef.current.href = imageDisplayRef2.current.src;
    }

    function uploadNewImage() {
        formImageRef.current.click();
    }

    return (
        <>
            <div id="dehaze-div" className="mt-5 py-5 grey-div">
                <div className="my-2">&nbsp;</div>
                <h2 className="text-center text-primary header">UPLOAD AND DEHAZE</h2>
                <div className="d-flex mt-5 justify-content-evenly">
                        <form className="form d-none" encType="multipart/form-data">
                            <input onChange={renderImage} ref={formImageRef} type={"file"} name="input-image" className="input-control form-control" accept="image/*" />
                        </form>
                        {
                            toggleUploader &&
                            <>
                            <div style={{height: 500}} className="position-relative border-picture mx-5 w-50">
                                <div ref={uploadImageRef} onClick={() => formImageRef.current.click()} style={{transform: "translate(-50%, -50%)", cursor: "pointer"}} className="position-absolute top-50 start-50">
                                <p className="text-center"><MdOutlineAddCircle size={75} color={"grey"} /></p>
                                <p>Click on the icon above to upload an image.</p>
                                </div>
                            </div>
                            </>
                        }
                        {
                            <>
                            <div className={!toggleUploader ? "" : "d-none"}>
                                <img ref={imageDisplayRef} src="" className="display-image mx-auto d-block" width={640} height={480} />
                                <p className="text-center text-secondary mt-3">Hazy Image</p>
                                <div className="mt-5 text-center">
                                    <button onClick={uploadNewImage} className="btn btn-light rounded-btn text-dark border">
                                        <MdUpload size={20} className="me-2" />
                                        Upload New Image
                                    </button>
                                </div>
                            </div>
                            <div className={!toggleUploader ? "" : "d-none"}>
                                {
                                    (loading) &&
                                    <div className="bg-white display-image position-relative" style={{height: 480, width: 640}}>
                                        <div style={{transform: "translate(-50%, -50%)"}}  className="position-absolute top-50 start-50">
                                            {/* <div className="spinner-border text-primary" /> */}
                                            {/* <MdImageSearch size={50} className="text-primary" /> */}
                                            <img src="/assets/gifs/gif_cloud.gif" className="d-block mx-auto" width={200} />
                                            <p className="mt-3">Finding and removing the haze ... <br/>
                                            (This may take upto a few minutes)</p>
                                        </div>
                                    </div>
                                }
                                {
                                    <div ref={imageHolder} className="d-block">
                                        <a ref={downloadRef} onClick={downloadImage} href={"#"} download={true}><img ref={imageDisplayRef2} src="" className="display-image mx-auto d-block" width={640} height={480} /></a>
                                        <p className="text-center text-secondary mt-3">Dehazed Image</p>
                                        <div className="mt-3 text-center">
                                            <button onClick={() => dehaze(true)} className="btn hover-btn d-block mx-auto mb-3 btn-transparent">
                                                Not satisfied? Click here to try our advanced algorithm.
                                            </button>
                                            <button onClick={() => downloadRef.current.click()} className="btn btn-primary rounded-btn text-light">
                                                <MdDownload size={20} className="me-2" />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                }   
                            </div>
                            </>
                        }
                </div>
            </div>
        </>
    );
}

export default memo(Dehazer);