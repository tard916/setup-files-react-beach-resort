import React, {Component, createContext} from 'react';
import Client from '../contentful/Contentful';

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  //getData
  getData = async () => {
    try{
      let response = await Client.getEntries({
        content_type: "roomsResort",
        order: "sys.createdAt"
      });

      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(it => it.price));
      let maxSize = Math.max(...rooms.map(it => it.size));

      this.setState({
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    }catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getData();
  }

  //getRoom
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    return tempRooms.find((rm) => rm.slug === slug);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = event.target.name;

    this.setState({
      [name]: value
    }, this.filterRooms);

  }


  /* The logic of the filter start here */
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    capacity = parseInt(capacity);
    price = parseInt(price);
    let tempRooms = [...rooms];
    if (type !== 'all') {
      tempRooms = tempRooms.filter(itm => itm.type === type)
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(itm => itm.capacity >= capacity);
    }
    tempRooms = tempRooms.filter(itm => itm.price <= price);
    tempRooms = tempRooms.filter(itm => itm.size >= minSize && itm.size <= maxSize);
    if (breakfast) {
      tempRooms = tempRooms.filter(itm => itm.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter(itm => itm.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms
    })
  }

  formatData(items) {
    return items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(img => img.fields.file.url);

      return {
        ...item.fields,
        id,
        images
      };
    });
  }

  render() {
    return (<RoomContext.Provider value={{
        ...this.state,
        getRoom: this.getRoom,
        handleChange: this.handleChange
      }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }

}

const RoomConsumer = RoomContext.Consumer;

export const withRoomConsume = (Component) => {
  return (props) => {
    return <RoomConsumer>
      {value => <Component {...props} context={value}/>}
    </RoomConsumer>
  }
}

export {RoomProvider, RoomConsumer, RoomContext};
