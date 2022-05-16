import { BrowserRouter, Routes, Route } from "react-router-dom";

import Relatorio1 from "./pages/Relatorio1";
import Relatorio2 from "./pages/Relatorio2";
import Relatorio3 from "./pages/Relatorio3";
import Configuracao from "./pages/Configuracao";

export default function Root(props) {
  return (
    <BrowserRouter basename="relatorio">
      <Routes>
        <Route  path="/" element={<Relatorio1 />} />
        <Route  path="/relatorio2" element={<Relatorio2 />} />
        <Route  path="/relatorio3" element={<Relatorio3 />} />
        <Route  path="/configuracao" element={<Configuracao />} />
        </Routes>
    </BrowserRouter>
  );
}
