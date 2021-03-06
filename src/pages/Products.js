import React, { useState } from "react";
import Muliselect from "multiselect-react-dropdown";
import Select from "react-select";

function Products() {
  var countrylist = [
    { value: 1, label: "Soumadeep" },
    { value: 2, label: "Ravi Kumar" },
    { value: 1, label: "Ramayana" },
    { value: 1, label: "Param" },
    { value: 1, label: "Mohan" },
  ];

  const equipdata = [
    { Equipment: "Tractor", id: 1 },
    { Equipment: "Shovel", id: 1 },
    { Equipment: "Trolley", id: 1 },
    { Equipment: "Mini Sprayer", id: 1 },
    { Equipment: "Combine Harvestor", id: 1 },
    { Equipment: "Cultivator", id: 1 },
    { Equipment: "Sickle", id: 1 },
    { Equipment: "Axe", id: 1 },
    { Equipment: "Hatchet", id: 1 },
    { Equipment: "Sprayer", id: 1 },
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
        <h5 style={{ color: "white" }}>Farmer Name</h5>
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
