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
        
            <input type="text" onChange={handleInputChange} value={inputValue}  placeholder="Categoria"/>
        
        </form>
    
     );
 }
 AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
export default AddCategory;