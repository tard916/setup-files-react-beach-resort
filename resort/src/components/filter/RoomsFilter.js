import React, {useContext} from 'react';
import {RoomContext} from "../../context/context";
import Title from "../title/Title";

//get unique value type
const getUnique = (items, value) => {
  return [...new Set(items.map(itm => itm[value] ))]
}

const RoomsFilter = ({rooms}) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  let types = getUnique(rooms, "type");
  types = ['all', ...types];
  let people = getUnique(rooms, 'capacity');

  return (
    <section className="filter-container">
      <Title title="search rooms"/>
      <form className="filter-form">
        {/* select type*/}
        <div className="form-group">
          <label htmlFor="type" >room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}>
            {
              types.map((itm, idx) => <option key={idx} value={itm}>{itm}</option>)
            }
          </select>
        </div>
        {/* end select type*/}

        {/* guests capacity*/}
        <div className="form-group">
          <label htmlFor="capacity" >guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}>
            {
              people.map((itm, idx) => <option key={idx} value={itm}>{itm}</option>)
            }
          </select>
        </div>
        {/* end guests capacity*/}

        {/* room price*/}
        <div className="form-group">
          <label htmlFor="price" >room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end room price*/}

        {/*size*/}
        <div className="form-group">
          <label htmlFor="size" >room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end size*/}

        {/* extras*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast" >breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets" >pets</label>
          </div>
        </div>
        {/* end extras*/}
      </form>
    </section>
  );
}

export default RoomsFilter;
