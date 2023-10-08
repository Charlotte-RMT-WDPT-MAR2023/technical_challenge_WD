import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import phonesService from "../services/phones.service";
import PhonePreview from "../components/PhonePreview";

function PhoneListPage() {
  const [phones, setPhones] = useState([]);
  const [inputText, setInputText] = useState("");

  const getAllPhones = () => {
    phonesService
      .getAllPhones()
      .then((response) => setPhones(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  const filteredPhones = (phones || []).filter((phone) => {
    return phone.name.toLowerCase().includes(inputText.toLowerCase());
  });

  return (
    <div>
      <Searchbar inputText={inputText} setInputText={setInputText} />
        {filteredPhones.map((phone) => (
          <PhonePreview key={phone.id} {...phone} />
        ))}
    </div>
  );
}
export default PhoneListPage;
