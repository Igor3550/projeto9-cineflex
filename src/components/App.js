import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import SelectedFilmPage from "./SelectedFilmPage";
import SectionPage from "./SectionPage"
import SuccesPage from "./SuccesPage"

import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme" element={<SelectedFilmPage />} />
          <Route path="/sessao" element={<SectionPage />} />
          <Route path="/sucesso" element={<SuccesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
