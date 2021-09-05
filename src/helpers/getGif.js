export const getGifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=OEEkXA5Azqpy6bJNHqHJWUaXCf1J723W&q=${ encodeURI(category) }&limit=10&lang=es`;
    
    const response=await fetch(url);
    const {data}=await response.json();
    const image=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url,
        }
    })
  
    
    return(image)

}