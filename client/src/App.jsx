import { useEffect } from "react";
import Auth from "@/routes/Auth/Auth.component";
import Home from "@/routes/Home/Home.component";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import { login, signUp, signOut, isAuthenticated } from "@/lib/pocketbase";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		loader: () => (isAuthenticated() ? null : redirect("/auth")),
	},
	{
		path: "/auth",
		element: <Auth />,
		action: async ({ request }) => {
			const formData = await request.formData();
			console.log(formData);
			switch (formData.get("intent")) {
				case "login":
					const authData = await login(formData.get("email"), formData.get("password"));
					if (authData && authData.token) return redirect("/");
					break;
				case "sign-out":
					const data = await signOut();
					console.log(data);
					return redirect("/auth");
					break;
			}
			return null;
		},
		loader: () => (isAuthenticated() ? redirect("/") : null),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
