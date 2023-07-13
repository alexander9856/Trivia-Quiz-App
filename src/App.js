import { RouterProvider } from 'react-router-dom';

import Spinner from './components/Spinner';
import router from './routes/router';

function App() {
    return <RouterProvider router={router} fallbackElement={<Spinner />} />;
}

export default App;
