import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const LazyHomepage = lazy(() => import('./HomePage/HomePage'));
const LazyCharacterPage = lazy(() => import('./CharacterPage/CharacterPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyHomepage />} />
        <Route path="/:characterId" element={<LazyCharacterPage />} />
        <Route path="*" element={<div>Page not found </div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
