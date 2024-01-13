import { useState } from "react";

  
// here open pop up models , why there are many useState , we have in one component one more models and we create this useState.
export const ShowModelPopUp = () => {

    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showOneMoreModel, setShowOneMoreModel] = useState<boolean>(false);
    const handleCloseOneMoreModel = () => setShowOneMoreModel(false);
    const handleShowOneMoreModel = () => setShowOneMoreModel(true);

    const [showThreeMoreModel, setShowThreeMoreModel] = useState<boolean>(false);
    const handleCloseThreeMoreModel = () => setShowThreeMoreModel(false);
    const handleShowThreeMoreModel = () => setShowThreeMoreModel(true);

    const [showFourMoreModel, setShowFourMoreModel] = useState<boolean>(false);
    const handleCloseFourMoreModel = () => setShowFourMoreModel(false);
    const handleShowFourMoreModel = () => setShowFourMoreModel(true);

    const [showFiveMoreModel, setShowFiveMoreModel] = useState<boolean>(false);
    const handleCloseFiveMoreModel = () => setShowFiveMoreModel(false);
    const handleShowFiveMoreModel = () => setShowFiveMoreModel(true);

    const [showSixMoreModel, setShowSixMoreModel] = useState<boolean>(false);
    const handleCloseSixMoreModel = () => setShowSixMoreModel(false);
    const handleShowSixMoreModel = () => setShowSixMoreModel(true);
    
    return {
        show, handleClose, handleShow
        , showOneMoreModel, handleCloseOneMoreModel, handleShowOneMoreModel
        , showThreeMoreModel, handleCloseThreeMoreModel, handleShowThreeMoreModel
        , showFourMoreModel, handleCloseFourMoreModel, handleShowFourMoreModel
        , showFiveMoreModel, handleCloseFiveMoreModel, handleShowFiveMoreModel
        , showSixMoreModel, handleCloseSixMoreModel, handleShowSixMoreModel
    };
}