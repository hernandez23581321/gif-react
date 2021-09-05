import React from 'react'

export const GifView = ({id,title,url}) => {
    return (
       
      
       
        <div className="col  ">
            <div className="card">
            <img
            src={url} alt={title}
            className="card-img-top"
            
            />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            </div>
           
            </div>
        </div>
       
     
        
    );
}
