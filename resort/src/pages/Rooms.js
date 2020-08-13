import React from 'react';
import Hero from "../components/hero/Hero";
import {Link} from "react-router-dom";
import Banner from "../components/banner/Banner";
import RoomsContainer from "../components/container/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer/>
    </>
  );
}

export default Rooms;
