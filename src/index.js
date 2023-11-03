import ReactDOOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {router} from "./router";
import {ContextProvider} from "./hoc";


const root = ReactDOOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);