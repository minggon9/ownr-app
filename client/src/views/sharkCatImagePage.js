import React, {useEffect, useState} from "react";
import {ImageContext} from "../context";
import ToggleButton from "../components/ToggleButton";
import Loading from "../components/Loading";
import './imagePageStyles.css'
import Carousel from "../components/Carousel";

const baseURL = "http://localhost:8800/api"

const SharkCatImagePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSharkSelected, setIsSharkSelected] = useState(false);
    const [isCatSelected, setIsCatSelected] = useState(false);
    const [images, setImages] = useState([])
    const fetchImages = (param) => {
        fetch(`${baseURL}/${param}`)
            .then(res => res.json())
            .then(res => {
                if(res.code === 200) {
                    setImages(res.images);
                    setTimeout(() => {
                        setIsLoaded(true)
                    }, 1000)
                }else{
                    console.log(res.message)
                }
            }).catch(e => {
            console.log(e)
            setIsLoaded(false)
        })
    }
    const loadData = () => {
        const sharksParam = isSharkSelected ? "sharks" : "";
        const catsParam = isCatSelected ? "cats" : "";
        const param = isSharkSelected && isCatSelected ? `${sharksParam}-${catsParam}` : sharksParam + catsParam;
        if (param) {
            setIsLoaded(false)
            fetchImages(param)
        } else {
            setImages([])
            setIsLoaded(true)
        }
    }
    useEffect(loadData, [isSharkSelected, isCatSelected])

    const displayHandler = (e) => {
        let target = e.target.innerText
        if (target === 'Sharks') {
            setIsSharkSelected(!isSharkSelected)
        } else {
            setIsCatSelected(!isCatSelected)
        }
    }

    return (
        <div className='container'>
            <div className="toggleButtonContainer">
                <ToggleButton buttonName={"Sharks"} handleClick={displayHandler}/>
                <ToggleButton buttonName={"Cats"} handleClick={displayHandler}/>
            </div>
            <div className="imageContainer">
                <ImageContext.Provider value={images}>
                    {isLoaded ? <Carousel/> : <Loading/>}
                </ImageContext.Provider>
            </div>
        </div>
    )
};


export default SharkCatImagePage;
