import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PagesHref, HomePage, RacasPage } from "@/web/pages";

import "@/web/styles/global.less";

const root = createRoot( document.getElementById( "react-app" )! );
root.render( <BrowserRouter>
	<Routes>
		<Route Component={ HomePage } path={ PagesHref.home } />
		<Route Component={ RacasPage } path={ PagesHref.racas } />
	</Routes>
</BrowserRouter> );
