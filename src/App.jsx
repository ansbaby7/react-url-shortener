import { useState } from 'react'
import LinkResult from './LinkResult'
import Shortener from './Shortener'

function App() {

  const [inputText,setInputText] = useState("");

  return (
    <div className="h-screen bg-slate-600  flex flex-col items-center justify-center">
      <Shortener setInputText={setInputText}/>
      <LinkResult inputText={inputText}/>
      </div>
  )
}

export default App
