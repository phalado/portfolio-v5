import { Routes, Route } from 'react-router-dom';

import Homepage from '@/pages/Homepage';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Layout from '@/components/Layout';
import Articles from '@/pages/Articles';
import About from '@/pages/About';
import WorkExperience from '@/pages/WorkExperience';
import Projects from '@/pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route element={<Layout />}>
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:stack" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
