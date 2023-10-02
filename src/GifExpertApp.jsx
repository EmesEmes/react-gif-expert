import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    
    const onAddCategory = (NewCategory) => {
        if( categories.includes(NewCategory) ) return;
        setCategories( [ NewCategory, ...categories]);
    }
  return (
    <>
        {/* Titulo */}
        <h1>GiftExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory={ onAddCategory }
        />

        {/* Listado de GIFs */}
        {categories.map( category => {
            return (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            )
        })}
            
        {/* Gif Item */}
    </>
  )
}
