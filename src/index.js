import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Destinations from './Pages/Destinations';
import NotFound from './Pages/NotFound';
import Details from "./Pages/Details";

import './index.scss';
import App from './App';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>

            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/:id/details" element={<Details />} />

        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);