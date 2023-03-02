import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Services from './Pages/Services';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "Services",
        element: <Services/>,
    },
])


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router} />);