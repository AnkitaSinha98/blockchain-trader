import React, { useState } from "react";
import db from "../firebase";
import "../components/ContactForm.css";

const Equipment = () => {
  const [id, SetId] = useState(null);
  const [name, SetName] = useState(null);
  const [type, SetType] = useState(null);
  const [location, SetLocation] = useState(null);
  const [message, SetMessage] = useState(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    db.collection("Equipment")
      .add({
        EquipmentId: id,
        EquipmentName: name,
        EquipmentType: type,
        EquipmentLocation: location,
        Note: message,
      })
      .then(() => {
        alert("Equipment has been registered !!");
      })
      .catch((error) => {
        alert(error.message);
      });

    SetId("");
    SetName("");
    SetType("");
    SetLocation("");
    SetMessage("");
  };

  return (
    <form className="Appxc" onSubmit={HandleSubmit}>
      Register Equipment
      <br />
      <br />
      <label className="text-3xl text-white-100 font-bold cursive">
        Equipment Id
      </label>
      <input
        placeholder="Equipment Id"
        value={id}
        onChange={(e) => SetId(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Equipment Name
      </label>
      <input
        placeholder="Equipment Name"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Equipment Type
      </label>
      <input
        placeholder="Equipment Type"
        value={type}
        onChange={(e) => SetType(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Equipment Location/Address
      </label>
      <textarea
        placeholder="Equipment Location"
        value={location}
        onChange={(e) => SetLocation(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Remark
      </label>
      <textarea
        placeholder="Note"
        value={message}
        onChange={(e) => SetMessage(e.target.value)}
      />
      <button
        type="submit"
        className="text-3xl text-white-100 font-bold cursive"
      >
        Submit
      </button>
    </form>
  );
};

export default Equipment;
