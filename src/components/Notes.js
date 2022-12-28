import React from 'react'


export default function Notes({addNotes}){
const[userValue , setUserValue]=React.useState({
    title : '',
    content : '',
  
})
function handleChange(event){
    let{name, value}=event.target
    setUserValue(prevState => ({
        ...prevState ,
        [name]: value
    }))
}

function submit(e){
addNotes(userValue)
setUserValue({
    title : '',
    content : ''
})
e.preventDefault()
}



    return(  
        
        <form>
        <input 
         
         type="text" 
         placeholder='Title'
         name='title'
         onChange={handleChange}
         value={userValue.title}
         />
         
        
        <textarea 
        rows='3'
        type='text' 
        placeholder='take a note...'
        name='content'
        onChange={handleChange}
        value={userValue.content}
        />
        
        
        <button 
        
        onClick={submit}
        
        >&#43;
        </button>
        </form>
        
    )
}