import React from 'react'

export const GifView = ({id,title,url}) => {
    return (
        <div className='card animate__animated animate__bounce animate__repeat-2'>
           <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
}
