import { createRoot } from "react-dom/client";
import { createHashRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

import { PagesHref, HomePage, RacasPage } from "@/web/pages";

import "@/web/styles/global.less";

createRoot( document.getElementById( "react-app" )! )
	.render( <RouterProvider router={ createHashRouter( [
		{
			path: "/", Component: Outlet, errorElement: <Navigate to={ "/" } />,
			children: [
				{ Component: HomePage, path: PagesHref.home, },
				{ Component: RacasPage, path: PagesHref.racas, },
			],
		},
	],
) } /> );
