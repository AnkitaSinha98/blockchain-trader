import React, { useState } from "react";
import Muliselect from "multiselect-react-dropdown";
import Select from "react-select";

function Products() {
  var countrylist = [
    { value: 1, label: "India" },
    { value: 2, label: "USA" },
    { value: 1, label: "Australlia" },
    { value: 1, label: "Japan" },
    { value: 1, label: "UK" },
  ];

  const equipdata = [
    { Equipment: "Tool 1", id: 1 },
    { Equipment: "Tool 2", id: 1 },
    { Equipment: "Tool 3", id: 1 },
    { Equipment: "Tool 4", id: 1 },
  ];

  //const [options] = useState(countrylist);
  const [equipoptions] = useState(equipdata);

  return (
    <div className="Appx">
      <div
        style={{
          width: "30%",
          marginLeft: "90px",
        }}
      >
        <h5 style={{ color: "white" }}>Country</h5>
        <Select options={countrylist} displayValue="label" />
      </div>

      <div
        style={{
          width: "30%",
          marginLeft: "90px",
          marginTop: "40px",
        }}
      >
        <h5 style={{ color: "white" }}>Equipment List</h5>
        <Muliselect options={equipoptions} displayValue="Equipment" />
      </div>
    </div>
  );
}

export default Products;
