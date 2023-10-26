import {createBrowserRouter} from "react-router-dom";
import {TodosPage} from "./Pages/TodosPage";
import {AlbumsPage} from "./Pages/AlbumsPage";
import {CommentPage} from "./Pages/CommentPage";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {path: '/todos', element: <TodosPage/>},
            {path: '/albums', element: <AlbumsPage/>},
            {path: '/comments', element: <CommentPage/>}
        ]
    }
]);

export {router};