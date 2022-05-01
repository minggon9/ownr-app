import React, {useContext, useState} from "react";
import {ImageContext} from "../../context";
import './styles.css'

const Carousel = () => {
    const images = useContext(ImageContext)
    const [currentImage, setCurrentImage] = useState(0)

    const previousImageHandler = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1)
        }
    }
    const nextImageHandler = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1)
        }
    }

    return (
        <div className='carousel'>
            <div className='buttonContainer'>
                {images.length === 0 || currentImage === 0 ? null :
                    <button className='arrow left' onClick={previousImageHandler}/>}
            </div>
            <div className='imageContainer'>
                {(images.length === 0) ? <p className='image'>No Images</p> :
                    <img className="image" src={images[currentImage].image_url} alt=""/>}
            </div>
            <div className='buttonContainer'>
                {images.length === 0 || currentImage === images.length - 1 ? null :
                    <button className='arrow right' onClick={nextImageHandler}/>}
            </div>
        </div>

    )
}

export default Carousel;
