import { Route, Routes } from "react-router-dom"
import Kscan from "./components/Kscan"
import Home from "./components/Home"
import Notav from "./components/Notav"
import Navbar from "./components/Navbar"
import { MantineProvider } from "@mantine/core"
import Container from "./components/Container"
import Result from "./components/Result"

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/kscan" element={<Kscan/>}/>
          <Route path="/kscan/result" element={<Result/>}/>
          <Route path="*" element={<Notav/>} />
        </Routes>
      </Container>
    </MantineProvider>
  )
}

export default App