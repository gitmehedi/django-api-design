import {useNavigate} from "react-router-dom";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";
import {delDiscount} from "src/store";


const TableData = ({rec}) => {
    const navigate = useNavigate();
    const [doDelDiscount] = useThunk(delDiscount);
    const handleDelete = (id) => {
        doDelDiscount(id);
        navigate('/discount');
    }

    return (
        <tr>
            <td>{rec.id}</td>
            <td>{rec.name}</td>
            <td>{rec.discount_percent}</td>
            <td>{rec.description}</td>
            <td>{rec.status ? 'Active' : 'Not Active'}</td>
            <td>
                <Action recId={rec.id} delCallback={handleDelete}/>
            </td>
        </tr>
    );
};
export default TableData;