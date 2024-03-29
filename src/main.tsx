import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './routes/root.route';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
