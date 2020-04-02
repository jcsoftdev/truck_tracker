import React from "react";

import TruckList from '../Components/TruckList'

const DATA = [
  {
    id: 1,
    name: 'Carlos',
    avatar: 'https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    trackerId: 2,
    address: 'NewYork',
    location: {
      lat: 40.7484,
      lng: -73.987854
    },
  },
  {
    id: 2,
    name: 'Joel',
    avatar: 'https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    trackerId: 2,
    address: 'Brazil',
    location: {
      lat: 40.7484,
      lng: -73.987854
    },
  },
  {
    id: 3,
    name: 'Maria',
    avatar: 'https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    trackerId: 2,
    address: 'Peru',
    location: {
      lat: 40.7484,
      lng: -73.987854
    },
  },
  {
    id: 4,
    name: 'Pedro',
    avatar: 'https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    trackerId: 2,
    address: 'Chile',
    location: {
      lat: 40.7484,
      lng: -73.987854
    },
  }
]
const Truck = props => {
  return <>
    <TruckList items={DATA}/>
  </>;
};

export default Truck;
