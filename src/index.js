import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import SendMessage from './routes/SendMessage';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom'
import './styles/global.css'
import Page from './components/layout/Page';

const router = createBrowserRouter([
	{
		path: '',
		element: <Page />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: "/message",
				element: <SendMessage />
			}
		]
	},
	{
		path: "message",
		element: <SendMessage />,
		errorElement: <ErrorPage />
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);