import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

import { PagesHref, HomePage, RacasPage } from "@/web/pages";

import "@/web/styles/global.less";

const root = createRoot( document.getElementById( "react-app" )! );
root.render( <RouterProvider router={ createBrowserRouter( [
	{
		path: "/",
		element: <Outlet />,
		errorElement: <Navigate to={ PagesHref.home } />,
		children: [
			{
				path: PagesHref.home,
				element: <HomePage />
			},
			{
				path: PagesHref.racas,
				element: <RacasPage />
			},
		],
	},
] ) } /> );
