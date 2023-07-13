import { Outlet, useNavigation } from 'react-router-dom';
import { QuizNavigation } from '../components/QuizNavigation';
export const QuizRoot = () => {
    const navigate = useNavigation();
    return (
        <>
            <Outlet />
            {navigate.state !== 'loading' && <QuizNavigation />}
        </>
    );
};
