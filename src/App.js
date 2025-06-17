import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Privacy from "./component/Privacy";

import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import RestaurantMenu from "./component/RestaurantMenu";
import Profilej from "./component/Profilej";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import TempShimmer from "./component/TempShimmer";

// Redux
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./component/Grocery"));

const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profilej",
            element: <Profilej />,
          },
        ],
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<TempShimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
