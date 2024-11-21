import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Stats from "./pages/Statistic.tsx";
import Home from "./pages/Home.tsx";
import {Login} from "./pages/Login/Login.tsx";
import GuessMovie from "./pages/GuessMovie.tsx";
import { Profile } from './pages/profile/Profile.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
	{
		path: "/profile",
		element: <Profile />,
	},
 	{
  		path: "/stats",
		element: <Stats />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/guess-movie",
    element: <GuessMovie />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
