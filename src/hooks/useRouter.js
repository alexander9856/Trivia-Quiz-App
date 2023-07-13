import { Navigate, useNavigation, useParams, useFetcher, useNavigate, useLoaderData, useLocation } from 'react-router-dom';

export const useRouter = () => {
    const fetcher = useFetcher();
    const loader = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();
    const params = useParams()?.qNum;
    const location = useLocation();
    return {
        fetcher,
        loader,
        navigation,
        navigate,
        Navigate,
        params,
        location
    };
}
