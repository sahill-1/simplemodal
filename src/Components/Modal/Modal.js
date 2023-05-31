import "./Modal.css";
import React, { useState } from "react";


const Modal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    if(modal){
        document.body.classList.add("active-modal")
    }
    else{
        document.body.classList.remove("active-modal")
    }
    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>
            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay">
                    <div className="modal-content">
                        <h2>Hello Modal</h2>
                        <p>
                            afgdjgjf iusdfiusgdf djsaj kjhfkah iyfdoaiy afdyuf fjsdgfjs gdsfjsgdb dfhiusdf hfiusdy fsiduyfi uidsiuy
                        </p>
                        <button  className="close-modal">
                            Close                            
                        </button>
                    </div>
                </div>
            </div>
            )}
            
        </>
    )
}

export default Modal
