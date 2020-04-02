import React from 'react'

import TruckItem from './TruckItem'
import Card from '../../shared/Components/UIElements/Card'
import Button from '../../shared/Components/FormElements/Button'
import './TruckList.scss'

const TruckList = props => {
  console.log(props.items.length);
  if (props.items.length === 0) {
    return (
      <div className="truck-list center">
        <Card>
          <h2>No trucks found. Maybe create one?</h2>
          <Button>Create truck</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="truck-list">
      {
        props.items.map(truck=>(
          <TruckItem key={truck.id} id={truck.id} name={truck.name} coordinates={truck.location} address={truck.address} image={truck.avatar}/>
        ))
      }
    </ul>
  )
}


export default TruckList
