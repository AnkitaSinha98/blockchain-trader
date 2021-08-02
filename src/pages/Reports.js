import React, { useState } from "react";
import { db } from "../firebase";
import "../components/ContactForm.css";

const Reports = () => {
  const [id, SetId] = useState(null);
  const [name, SetName] = useState(null);
  const [gender, SetGender] = useState(null);
  const [phone, SetPhone] = useState(null);
  const [location, SetLocation] = useState(null);
  const [message, SetMessage] = useState(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    db.collection("Farmer")
      .add({
        FarmerId: id,
        FarmerName: name,
        Gender: gender,
        FarmerPhone: phone,
        FarmerLocation: location,
        Note: message,
      })
      .then(() => {
        alert("Farmer has been registered !!");
      })
      .catch((error) => {
        alert(error.message);
      });

    SetId("");
    SetName("");
    SetGender("");
    SetPhone("");
    SetLocation("");
    SetMessage("");
  };

  return (
    <form className="Appxc" onSubmit={HandleSubmit}>
      Register Farmer
      <br />
      <br />
      <label className="text-3xl text-white-100 font-bold cursive">
        Farmer Id
      </label>
      <input
        placeholder="Farmer Id"
        value={id}
        onChange={(e) => SetId(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Farmer Name
      </label>
      <input
        placeholder="Farmer Name"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Gender
      </label>
      <input
        placeholder="Gender"
        value={gender}
        onChange={(e) => SetGender(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Farmer Phone
      </label>
      <input
        placeholder="Farmer Phone"
        value={phone}
        onChange={(e) => SetPhone(e.target.value)}
      />
      <label className="text-3xl text-white-100 font-bold cursive">
        Farmer Location/Address
      </label>
      <textarea
        placeholder="Farmer Location"
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

export default Reports;
