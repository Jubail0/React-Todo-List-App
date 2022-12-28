import React from 'react'


export default function Cards({title,content,id ,deletes}){
 
    return (
        <div className='note'>
        <h1 >{title}</h1>
        <hr/>
        <p >{content}</p>
         <button 
         className='cards-btn'
         onClick={()=>deletes(id)}
         
         >Delete</button> 
        </div>
    )
}