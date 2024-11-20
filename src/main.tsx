import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from "./pages/Profile.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "profile/:username",
    element: <Profile />
  },
  {
    path: "login",
    element: <Login />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
