import React from 'react'
import './cssComp/smallCollage.scss';

function importAllPngs(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
        return true;
    });
    return images;
}

const pngImages = importAllPngs(require.context('../assets/aboutUs_assets/smallCollage', false, /\.png$/));

const imageData = [
    { id: 1, url: pngImages['smallCollage1.png'], alt: "smallCollage1" },
    { id: 2, url: pngImages['smallCollage2.png'], alt: "smallCollage2" },
    { id: 3, url: pngImages['smallCollage3.png'], alt: "smallCollage3" },
    { id: 4, url: pngImages['smallCollage4.png'], alt: "smallCollage4" },
    { id: 5, url: pngImages['smallCollage5.png'], alt: "smallCollage5" },
]

const SmallCollage = () => {


    return (
        <div className="smallCollage">
            <div className="smallCollage_carousel">
                {imageData.map((image, index) => (
                    <img key={index} src={image.url} alt={image.alt} className="smallCollage_carousel_item" />
                ))}
            </div>
        </div>
    )
}

export default SmallCollage
