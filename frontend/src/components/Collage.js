import './cssComp/collage.scss';
import { useEffect, useState } from 'react';


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
    { id: 9, url: pngImages['collage9.png'], alt: "collage9" },
    { id: 10, url: pngImages['collage10.png'], alt: "collage10" },
    { id: 11, url: pngImages['collage11.png'], alt: "collage11" },
    { id: 12, url: pngImages['collage12.png'], alt: "collage12" },
    { id: 13, url: pngImages['collage13.png'], alt: "collage13" },
    { id: 14, url: pngImages['collage14.png'], alt: "collage14" },
]

const extendedImageData = [...imageData, ...imageData];

const Collage = () => {

    const [totalWidth, setTotalWidth] = useState(0);

    //Calculating the width of the collage
    useEffect(() => {
        let width = 0;
        imageData.forEach((image) => {

            const img = new Image();
            img.onload = () => {
                width += img.width;
                // Set total width once last image is loaded
                if (image.id === imageData[imageData.length - 1].id) {
                    setTotalWidth(width);
                }

                console.log(width);
            };
            img.src = image.url;
        });
    }, []);

    const speed = 150; // pixels per second
    const animationDuration = `${6333 / speed}s`;

    return (
        <div className="collage" >
            <div className="collage_carousel" style={{ animationDuration: animationDuration }}>
                {extendedImageData.map((image, index) => (
                    <img key={index} src={image.url} alt={image.alt} className="collage_carousel_item" />
                ))}
            </div>
        </div>
    )
}

export default Collage
