import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [Advices, setadvices] = useState('')
  
  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip
      console.log(advice)
      setadvices(advice)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchAdvice()
  },[])

  const handleGenerate = () => {
    fetchAdvice()
  } 
  return (
    <div className="App">
      <div className="card">
      <h1>{Advices}</h1>

      <button className='button' onClick={(e) => handleGenerate()}>
        <span>Give Me Advice</span>
      </button>
      </div>
      
    </div>
  );
}

export default App;
