import React from 'react'


const Travel = ({ location, imageUrl, description, googleMapsUrl, title }) => {

    return (
        <div>
            <h1>{title}</h1>
            <img src={imageUrl} />
            <p>Location: {location}</p>
            <p>Description:{description}</p>

            <a href={googleMapsUrl}>googleMapsUrl</a>
        </div>
    )
}


export default Travel