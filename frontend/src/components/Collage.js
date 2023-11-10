import React from 'react'
import './cssComp/collage.scss';
import { useRef, useEffect } from 'react';

function importAllPngs(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
        return true;
    });
    return images;
}

const pngImages = importAllPngs(require.context('../assets/collage_assets', false, /\.png$/));

const imageData = [
    { id: 1, url: pngImages['collage1.png'], alt: "collage1" },
    { id: 2, url: pngImages['collage2.png'], alt: "collage2" },
    { id: 3, url: pngImages['collage3.png'], alt: "collage3" },
    { id: 4, url: pngImages['collage4.png'], alt: "collage4" },
    { id: 5, url: pngImages['collage5.png'], alt: "collage5" },
    { id: 6, url: pngImages['collage6.png'], alt: "collage6" },
    { id: 7, url: pngImages['collage7.png'], alt: "collage7" },
    { id: 8, url: pngImages['collage8.png'], alt: "collage8" },
]

const Collage = () => {
   
    return (
        <div className="collage" >
            <div className="collage_carousel">
                {imageData.map((image) => (
                    <img key={image.id} src={image.url} alt={image.alt} className="collage_carousel_item" />
                ))}
                {imageData.map((image) => (
                    <img key={image.id} src={image.url} alt={image.alt} className="collage_carousel_item" />
                ))}

            </div>

        </div>
    )
}

export default Collage
