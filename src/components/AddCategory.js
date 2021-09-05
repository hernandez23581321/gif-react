import React,{useState} from 'react';
import PropTypes from 'prop-types';
 export const AddCategory=({setCategories})=>{

    const [inputValue,setInputValue] = useState('')
    
    
    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
       
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        console.log("submit hecho");   
       // if(inputValue===null || inputValue==="") return true;
       if(inputValue.trim().length>2){
        setCategories(cat=>[inputValue,...cat]);
        setInputValue('');
       }
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
                <div className="form-outline">
                <input onChange={handleInputChange} value={inputValue} type="text" id="typeNumber" className="form-control" />
                <label className="form-label" for="typeNumber">Categoria</label>
        </div>
         
        
        </form>
    
     );
 }
 AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
export default AddCategory;