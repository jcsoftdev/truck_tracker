import React, { useState } from "react";

import Avatar from "../../shared/Components/UIElements/Avatar";
import Card from "../../shared/Components/UIElements/Card";
import Button from "../../shared/Components/FormElements/Button";
import Modal from "../../shared/Components/UIElements/Modal";
import Map from "../../shared/Components/UIElements/Map";
import "./TruckItem.scss";


const TruckItem = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);
  
  return (
    <>
      {
        
      }
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="trucker-item__modal-content"
        footerClass="trucker-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="truck-item" onClick={openMapHandler}>
        <Card className="truck-item__card">
          <div className="truck-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="truck-item__content">
            <div className="place-item__info">
              <h2>{props.name}</h2>
              <p>Location: {props.address}</p>
            </div>
          </div>
        </Card>
      </li>
    </>
  );
};

export default TruckItem;
