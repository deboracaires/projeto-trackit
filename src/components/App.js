import GlobalStyle from "../assets/styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Historico from "./Historico";
import AuthProvider from "../contexts/LoginContext";

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
     
      <GlobalStyle />
      {/* <NavBar /> */}
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/habitos"  element={<Habitos/>} />
        <Route path="/historico" element={<Historico/>} />
      </Routes>
     
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
