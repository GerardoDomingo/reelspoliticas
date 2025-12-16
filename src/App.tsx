import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Terminos from './pages/Terminos';
import Politica from './pages/Politica';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="terminos" element={<Terminos />} />
        <Route path="politica" element={<Politica />} />
      </Route>
    </Routes>
  );
}