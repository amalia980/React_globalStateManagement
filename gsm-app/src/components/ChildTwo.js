import ChildThree from "./ChildThree";
import { useContext } from "react";
import {BasketContext} from '../context/basketContext';

const ChildTwo = (props) => {

    const {basket} = useContext(BasketContext);

    return (
        <div>
            <h4>Child 2</h4>
            <p>Items in cart: {basket.length}</p>
            <ChildThree message={props.message} />
        </div>
    )
}

export default ChildTwo;