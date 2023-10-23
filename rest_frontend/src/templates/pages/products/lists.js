import {useNavigate} from "react-router-dom";
import Action from 'src/components/actions';
import {useThunk} from "src/hooks/useThunk";
import {delProduct} from "src/store";


const TableData = ({rec}) => {
    const navigate = useNavigate();
    const [doDelProduct] = useThunk(delProduct);
    const handleDelete = (id) => {
        doDelProduct(id);
        navigate("/product");
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