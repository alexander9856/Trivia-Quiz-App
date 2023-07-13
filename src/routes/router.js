import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { QuizRoot } from "../pages/QuizRoot";
import { Quiz } from "../pages/Quiz";
import Results from "../pages/Results";
import {
    Home,
    action as submitDataAction,
    loader as categoriesLoader,
} from '../pages/Home';


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: categoriesLoader,
                action: submitDataAction,
            },
            {
                path: '/quiz',
                element: <QuizRoot />,
                children: [
                    {
                        path: ':qNum',
                        element: <Quiz />,
                    },
                    {
                        path: 'results',
                        element: <Results />,
                    },
                ]
            },

        ],
    },
]);

export default router;
