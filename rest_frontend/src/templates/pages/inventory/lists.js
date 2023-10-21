import Action from "src/components/actions";
import {deleteInventory} from "src/store/thunks/inventoryThunks";


const ListTable = ({rec}) => {

    return (
        <tr key={rec.id}>
            <td>{rec.id}</td>
            <td>{rec.name}</td>
            <td>{rec.quantity}</td>
            <td>{rec.status}</td>
            <td>
                <Action recId={rec.id} delCallback={deleteInventory}/>
            </td>
        </tr>
    );
};

export default ListTable;