import React, {Component} from 'react';
import {RoomContext} from "../../context/context";
import Loading from "../loader/Loading";
import Room from "../room/Room";
import Title from "../title/Title";

class FeatureRooms extends Component {
  static contextType = RoomContext;

  render() {
    const {loading, featuredRooms: rooms} = this.context;
    const fRooms = rooms.map(rm => {
      return (<Room key={rm.id} room={rm}/>);
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms"/>
        <div className="featured-rooms-center">
          {loading ? <Loading /> : fRooms}
        </div>
      </section>
    );
  }
}

export default FeatureRooms;
