import React from 'react';
import RoomsFilter from "../filter/RoomsFilter";
import RoomsList from "../room/RoomsList";
import {withRoomConsume} from "../../context/context";
import Loading from "../loader/Loading";

const RoomsContainer = ({context}) => {
  const {loading, sortedRooms, rooms} = context;
  if (loading && rooms.length === 0) {
    return <Loading/>;
  }
  return (
    <>
      <RoomsFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms}/>
    </>
  );
  // return (
  //   <RoomConsumer>
  //     {(value => {const {loading, sortedRooms, rooms} = value;}
  //   </RoomConsumer>
  // );
}

export default withRoomConsume(RoomsContainer);
