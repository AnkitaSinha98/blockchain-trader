import React, { useState } from "react";
import { db } from "../firebase";
import "../components/ContactForm.css";

const Equipment = () => {
  const [number, SetNumber] = useState(null);
  const [id, SetId] = useState(null);
  const [name, SetName] = useState(null);
  const [type, SetType] = useState(null);
  const [status, SetStatus] = useState(null);
  const [location, SetLocation] = useState(null);
  const [message, SetMessage] = useState(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    db.collection("Equipment")
      .add({
        SerialNumber: number,
        EquipmentId: id,
        EquipmentName: name,
        EquipmentType: type,
        EquipmentStatus: status,
        EquipmentLocation: location,
        Note: message,
      })
      .then(() => {
        alert("Equipment has been registered !!");
      })
      .catch((error) => {
        alert(error.message);
      });

    SetNumber("");
    SetId("");
    SetName("");
    SetType("");
    SetStatus("");
    SetLocation("");
    SetMessage("");
  };

  return (
    <form className="Appxc" onSubmit={HandleSubmit}>
      Register Equipment
      <br />
      <br />
      <label className="text-3xl text-white-100 cursive">Serial Number</label>
      <input
        placeholder="Serial Number"
        value={number}
        onChange={(e) => SetNumber(e.target.value)}
      />
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
        Equipment Status (Idle/Repair/Occupied)
      </label>
      <input
        placeholder="Equipment Status"
        value={status}
        onChange={(e) => SetStatus(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Location of Equipment
      </label>
      <input
        placeholder="Equipment Location"
        value={location}
        onChange={(e) => SetLocation(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">Note</label>
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
