import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import phonesService from "../services/phones.service";

function PhoneDetailsPage(props) {
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState(null);
  const { id } = useParams();

  const getPhone = () => {
    phonesService
      .getPhone(id)
      .then((response) => {
        const onePhone = response.data;
        setPhone(onePhone);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhone();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {phone && (
            <div>
              <p>Name: {phone.name}</p>
              <p>Manufacturer: {phone.manufacturer}</p>
              <p>Description: {phone.description}</p>
              <p>Color: {phone.color}</p>
              <p>Price: {phone.price}</p>
              <p>Screen: {phone.screen}</p>
              <p>Processor: {phone.processor}</p>
              <p>Ram: {phone.ram}</p>
              <div className="preview-image">
                <img
                  src={`/client/src/images/${phone.imageFileName}`}
                  alt={phone.imageFileName}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PhoneDetailsPage;
