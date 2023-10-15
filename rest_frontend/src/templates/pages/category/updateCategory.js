import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCategory} from "src/store";
import {getRecId} from 'src/store/utils/urls';
import Skeleton from 'src/components/Skeleton';
import {useThunk} from 'src/hooks/useThunk';
import Update from "./update";

const UpdateCategory = () => {
    const id = getRecId();
    const [doFetchCategory, isLoading, loadingErrors] = useThunk(fetchCategory);

    useEffect(() => {
        if (id) {
            doFetchCategory(id);
        }
    }, [doFetchCategory]);

    const {record} = useSelector((state) => {
        return state.categories;
    });

    if (isLoading) {
        return <Skeleton times={2} className="h-10 w-full"/>;
    } else if (loadingErrors) {
        return <div>Error fetching data...</div>;
    } else {
        return <Update record={record}/>;
    }
};
export default UpdateCategory;