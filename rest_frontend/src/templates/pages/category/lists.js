import {delCategory} from "src/store";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";
import {useNavigate} from "react-router-dom";


const TableData = ({rec}) => {
    const navigate = useNavigate();
    const [doDelCategory] = useThunk(delCategory);
    const handleDelete = (id) => {
        doDelCategory(id);
        navigate("/category");
    }

    return (
        <tr>
            <td>{rec.id}</td>
            <td>{rec.name}</td>
            <td>{rec.code}</td>
            <td>{rec.description}</td>
            <td>{rec.status}</td>
            <td>
                <Action recId={rec.id} delCallback={handleDelete}/>
            </td>
        </tr>
    );
};
export default TableData;