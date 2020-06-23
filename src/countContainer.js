import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
    counter: state,
});

const CountContainer = ({ counter, dispatch }) => (
    <div>
        <p>count: {counter}</p>
        <button onClick={() => dispatch({ type: "ADD" })}> + 1</button>
        <button onClick={() => dispatch({ type: "ADDTEN" })}> + 10</button>
        <button onClick={() => dispatch({ type: "REMOVE" })}> - 1</button>
        <button onClick={() => dispatch({ type: "REMOVETEN" })}> -10 </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
);

export default connect(mapStateToProps)(CountContainer);
