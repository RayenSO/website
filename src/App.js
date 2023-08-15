import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Accueil from './pages/Accueil/Accueil';
import ReinsFonctions from './pages/AProposReins/ReinsFonctions';
import MaladieRenales from './pages/AProposReins/MaladiesRenales';
import Depistage from './pages/Prevention/Depistage';
import ProtegerReins from './pages/Prevention/ProtegerReins';
import AvantDialyseEtGreffe from './pages/Traitements/AvantDialyseGreffe';
import Dialyse from './pages/Traitements/Dialyse';
import Greffe from './pages/Traitements/Greffe';
import AideChoix from './pages/Traitements/AideAuChoix';
import VieQuotidienne from './pages/VieMaladie/VieQuotidienne';
import VieGrossesse from './pages/VieMaladie/VieGrossesse';
import GestionInsuffisance from './pages/VieMaladie/GestionInsuffisance';
import PositiveAttitude from './pages/VieMaladie/PositiveAttitude';
import DroitsSociaux from './pages/VieMaladie/DroisSociaux';
import Nutrition from './pages/Nutrition/Nutrition';
import MonParcours from './pages/MonParcours/MonParcours';
import Documentation from './pages/Plus/Documentation'
import Echanges from './pages/Plus/Echanges';
import Temoignagnes from './pages/Plus/Temoignages';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <React.Fragment>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />  
        <Route path="/les-reins-et-leurs-fonctions" element={<ReinsFonctions />} />
        <Route path="/les-maladies-renales" element={<MaladieRenales />} />
        <Route path="/depistage" element={<Depistage />} />
        <Route path="/protéger-ses-reins" element={<ProtegerReins />} />
        <Route path="/avant-la-dialyse-et-la-greffe" element={<AvantDialyseEtGreffe />} />
        <Route path="/la-dialyse" element={<Dialyse />} />
        <Route path="/la-greffe" element={<Greffe />} />
        <Route path="/aide-au-choix" element={<AideChoix />} />
        <Route path="/vie-et-organisation-au-quotidien" element={<VieQuotidienne />} />
        <Route path="/grossesse-et-information-pour-la-femme" element={<VieGrossesse />} />
        <Route path="/gérer-son-insuffisance-rénale" element={<GestionInsuffisance />} />
        <Route path="/positive-attitude" element={<PositiveAttitude />} />
        <Route path="/droits-sociaux" element={<DroitsSociaux />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/mon-parcours" element={<MonParcours />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/echanges" element={<Echanges />} />
        <Route path="/temoignagnes" element={<Temoignagnes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>

    </React.Fragment>
  );
}

export default App;
