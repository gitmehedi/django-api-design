import {useNavigate} from "react-router-dom";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";
import {delSession} from "src/store";


const TableData = ({rec}) => {
    const navigate = useNavigate();
    const [doDelSession] = useThunk(delSession);
    const handleDelete = (id) => {
        doDelSession(id);
        navigate("/session");
    }

    return (
        <tr>
            <td>{rec.id}</td>
            <td>{rec.user}</td>
            <td>{rec.total}</td>
            <td>{rec.status}</td>
            <td>
                <Action recId={rec.id} delCallback={handleDelete}/>
            </td>
        </tr>
    );
};
export default TableData;