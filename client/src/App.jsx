// use lazy loading of components
import React, { lazy, Suspense } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import StatesProvider from './states/states';

import './App.css';

// add pages
const Home = lazy(() => import('./pages/home.page'));
const Contributors = lazy(() => import('./pages/contributors/contributors.page'));

function App() {
    return (
        <StatesProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/contribution" element={<Contributors />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </StatesProvider>
    );
}

export default App;
