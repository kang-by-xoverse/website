import { Route } from "react-router-dom"
import Kscan from "./components/Kscan"
import Home from "./components/Home"

const App = () => {
  return (
    <div>
      <Route path="/home" element={<Home/>}/>
      <Route path="/kscan" element={<Kscan/>}/>
    </div>
  )
}

export default App