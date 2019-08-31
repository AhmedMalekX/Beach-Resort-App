import React from 'react'
import items from './data'
const RoomContext = React.createContext();

class RoomProvider extends React.Component
{
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice:0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    // Get Data
    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price ));
        let maxSize  = Math.max(...rooms.map(item => item.size ));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price: maxPrice,
            maxPrice,
            maxSize
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields,images,id};
            return room;
        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug );
        return room;
    };

    handelChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked: target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        },this.filterRooms);
    };

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
// The Rooms
        let tempRooms = [...rooms];
// Transform values
        capacity = parseInt(capacity);
        price = parseInt(price);
// Filter By Type
        if(type !== 'all')
        {
            tempRooms = tempRooms.filter(room => {
                return room.type === type
            })
        }
// Filter by Capacity
        if (capacity !== 1)
        {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity );
        }
// Filter By Price
        tempRooms = tempRooms.filter(room => room.price <= price);
// filter By Size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
// Filter By Breakfast
        if (breakfast)
        {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
// Filter By Breakfast
        if (pets)
        {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        this.setState({
            sortedRooms: tempRooms
        });
    };

    render() {
        return(
            <RoomContext.Provider value={{
                ...this.state,
                getRoom:this.getRoom,
                handelChange: this.handelChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component)
{
    return function ConsumerWrapper(props)
    {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        )
    }
}




export {RoomProvider, RoomConsumer, RoomContext}
