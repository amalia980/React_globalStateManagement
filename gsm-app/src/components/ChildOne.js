import ChildTwo from "./ChildTwo";


const ChildOne = (props) => {

    const {message} = props;

    return (
        <div>
            <h3>Child 1</h3>
            <p>{message}</p>
            <ChildTwo />
        </div>
    )
}

export default ChildOne;