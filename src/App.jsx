
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}


function Home(){

  return (
    <div>
      <div id="navigationBar" style={{
          display : "flex",
          marginTop: "20px",
          margin:"auto",
          backgroundColor:"white"
          
        }}>
        
        <div style={{
          display: "flex",
          margin:"auto",
          padding:"10px",
          
        }}>
          <div style={{marginRight:"20px", marginTop: "15px", cursor:"pointer"}}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ALLEN_Career_Institute_logo.svg/2560px-ALLEN_Career_Institute_logo.svg.png' style={{
            width:"80px"
          }}/></div>
          <div><Button name="course"/></div>
          <div><Button name="Test Series"/></div>
          <div><Button name="Scholorship"/></div>
          <div><Button name="Result"/></div>
        </div>
        <div style={{display:"flex", marginRight:"100px", marginTop:"20px"}}>
          <Button name="login"/>
          <Button name="contact us" />
        </div>
      </div>
      <div>
        <div style={{display: "flex",}}>
          <div> Online coaching that delivers result </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEUg3GCzh-_3KptxcJkbI-q-ozhEQ3zFUnw&s" />
          </div>
        </div>
      </div>
    </div>
  )
}


function Button(props){
  return (
    <div>
      <button
      style={{
        marginLeft:"25px",
        fontSize:"15px",
        border: 2,
        borderRadius: 0,
        padding: 15,
        cursor: "pointer",
        backgroundColor:"white"

      }}
      >{props.name}</button>
    </div>
  )
}
export default App
