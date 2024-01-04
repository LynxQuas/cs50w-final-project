import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AppLayout from "./pages/AppLayout";

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {

const router = createBrowserRouter(
    [
        { path: "/", element: <AppLayout/>, children: [
            { index: true, element: <h1>Home</h1> },
            { path: "courses", element: <h1>Courses</h1> },
            { path: "articles", element: <h1>Articles</h1> },
            { path: "login", element: <LoginPage/> },
            { path: "register", element: <RegisterPage/> }
        ]}

    ])
  
    return (
      <RouterProvider router={router}/>
    )
}

export default App
