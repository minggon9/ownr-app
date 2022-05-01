const {sharksList, catsList} = require("./imagesList");
const allAnimalType = ['sharks', 'cats', 'sharks-cats'];

const imageData = (req, res) => {
    let animalType = req.params.animal;
    let error = getInputValidationError(animalType);
    if (error) {
        res.status(error.code).json(error);
    } else {
        switch (animalType) {
            case allAnimalType[0]:
                res.json({code:200, images: generateImageList(sharksList)})
                break;
            case allAnimalType[1]:
                res.json({code:200, images: generateImageList(catsList)})
                break;
            case allAnimalType[2]:
                res.json({code:200, images: generateImageList(randomOrder([...sharksList, ...catsList]))})
        }
    }
}

const getInputValidationError = animalType => {
    if (allAnimalType.indexOf(animalType) === -1) {
        return {code: 404, message: `${animalType} images not found`};
    }
}

const generateImageList = (imageList) => {
    const newImageList = new Array(imageList.length)
    imageList.forEach((image, index) => {
        newImageList[index] = {id: index, image_url: image}
    })
    return newImageList
}

//Fisher–Yates shuffle algorithm
const randomOrder = imageList => {
    for (let i = imageList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [imageList[i], imageList[j]] = [imageList[j], imageList[i]]
    }
    return imageList
}

module.exports = imageData;
