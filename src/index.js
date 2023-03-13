import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Services from './Pages/Services';
import Informations from './Pages/Informations';
import Quand from './Pages/Quand';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "Services",
        element: <Services/>,
    },
    {
        path: "Informations",
        element: <Informations/>
    },
    {
        path: "Quand-laver-ses-gouttieres",
        element: <Quand/>
    },
])


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router} />);