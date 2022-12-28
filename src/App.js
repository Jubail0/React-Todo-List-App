import React from 'react'
import Header from './components/Header';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Cards from './components/Cards';
import './index.css';


function App() {

  const[inputValue ,setInputValue]=React.useState([])
  
  function addNotes(userValue){
  setInputValue(prevState => {
    return [...prevState , userValue]
  })
  
  }
function deletes (id){

setInputValue(prevState => {
 return prevState.filter((item,index)=>{
    return index!== id;
    
  })

})

}

const display = inputValue.map((item,index) => <Cards key={index} id={index} deletes ={deletes} title ={item.title} content ={item.content}/>)
  const data = new Date().getFullYear()
  
  return (
    <div className="App">
     
     
   
        <Header/>
        <div className='note-container'>
        <Notes addNotes ={addNotes}/>
        </div>
        <div className='lists'>
        {display}
        </div>
        <Footer data ={data}/>
   
    
    </div>
  );
}

export default App;
