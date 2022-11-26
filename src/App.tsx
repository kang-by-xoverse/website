import { Route, Routes, redirect } from "react-router-dom"
import Kscan from "./components/Kscan"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/kscan" element={<Kscan/>}/>
      </Routes>
    </div>
  )
}

export default App