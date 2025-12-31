import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import { PagesHref, HomePage, RacasPage } from "@/web/pages";

import "@/web/styles/global.less";

const root = createRoot( document.getElementById( "react-app" )! );

root.render( <HashRouter basename={ import.meta.env.BASE_URL }>
	<Routes>
		<Route Component={ HomePage } path={ PagesHref.home } />
		<Route Component={ RacasPage } path={ PagesHref.racas } />
	</Routes>
</HashRouter> );
