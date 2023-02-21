import React from "react";

const Display = (props) => {
    //const dataInfo = props.dataInfo;
    const dataInfo = props.dataInfo.map((item) => {
        return(
            <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
        </tr>
        );
    })
    return(
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </thead>
                <tbody>
                    {dataInfo}
                </tbody>
            </table>
        </div>
    );
}

export default Display;