import React from 'react'
import './ImageList.css'

function ImageList(props){
    const imgs = props.foundImages.map(img => {
        return <img key={img.id} src={img.urls.regular} alt={img.alt_description}/>
    })
    console.log(props.foundImages)

    return(
        <div className="image__list">
            {imgs}
        </div>
    )

}

export default ImageList