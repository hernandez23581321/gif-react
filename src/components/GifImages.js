import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGif';
import { GifView } from './GifView';
export const GifImages = ({category}) => {
    // const [images, setImages] = useState([]);

  
      const {data:gifs,loading}=useFetchGifs(category);
   

    
    return (
        <>
        <h3>{ category } </h3> 
        {loading && 
        <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
    }
        <div className="row row-cols-1 row-cols-md-3 g-4">
           
           
            {gifs.map((img)=>{
               return <GifView 
               key={img.id}
               {...img}
               ></GifView>
           })}
         
        </div>
        </>

        
    )
}

GifImages.propTypes = {

}

export default GifImages
