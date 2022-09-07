import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Categorie from "./pages/Categorie";
import Article from "./pages/Article";
import Panier from "./pages/Panier";
import Commandes from "./pages/Commandes";
import NotFound from "./pages/NotFound";
// import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Category/:id" element={<Categorie />} />
        <Route path="/Articles/:id" element={<Article />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Commandes" element={<Commandes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
