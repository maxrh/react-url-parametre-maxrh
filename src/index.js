import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Details from "./Pages/Details"
import './index.css';
import App from './App';

import Destinations from "./Components/Destinations"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>

            <Route index element={<Destinations />} />

                <Route path="/details" element={<Details />}>

            </Route>

        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);