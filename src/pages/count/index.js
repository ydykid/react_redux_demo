import React from "react";
import ComA from "../ComA";
import ComB from "../ComB";

class Count extends React.Component{
    render() {
        return (
            <div className="Count">
                <ComA/>
                <ComB/>
            </div>
        )
    }
}

export default Count
