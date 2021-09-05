import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import GifImages from './components/GifImages';

export const GifExpertApp=()=>{
    //const categorias=["One Piece","Dragon Ball","Kimetsu"]
    
   
    const [categorias, setcategories] = useState(["One Piece"])
    // const categoryAdd=(e)=>{
      
    //     // setcategorie([...categorias,'hunterXHunter']);
    //      setcategorie((cat)=>[...categorias,categorias]);
    //      document.getElementById('categoria').value="";
   
    // };
     
     return (
     <>
        <h2>Busqueda de imagenes GIF</h2>
        <AddCategory setCategories={setcategories}></AddCategory>
   

        {/* <button onClick={categoryAdd}>Add</button> */}
     
        <div className="">
           {categorias.map((categorie,id)=>{
               return <GifImages key={id} category={categorie}/>
           })}
        </div>
      
        </>
    )
}
export default GifExpertApp;