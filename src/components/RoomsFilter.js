import React, { useContext } from 'react'
import { RoomContext } from "../context";
import Title from "./Title";

// Get All unique Values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => {
        return  item[value]
    }))]
};

function RoomsFilter({rooms})
{
    const context = useContext(RoomContext);
    const {
        handelChange,
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
    // get unique types
    let types = getUnique(rooms, 'type');
    // add all 
    types = ['all', ...types];
    // max to jsx
    types = types.map((item,index) => {
            return (
                <option value={item} key={index}>{item}</option>
            )
    });

let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    });
    return (
        <section className='filter-container'>
            <Title title='Search Rooms'/>
            <form className='filter-form'>
                {/*Start Select Type*/}
                <div className='form-group'>
                    <label htmlFor="type"> Room Type </label>
                    <select name="type" id="type" value={type} className='form-control' onChange={handelChange}>
                        {types}
                    </select>
                </div>
                {/*End Select Type */}
                {/*Start guest Type*/}
                <div className='form-group'>
                    <label htmlFor="capacity"> Guests </label>
                    <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handelChange}>
                        {people}
                    </select>
                </div>
                {/*End guest Type */}
                {/* Start Room Price */}
                <div className="form-group">
                    <label htmlFor="price">
                        Room Price ${price}
                    </label>
                    <input type="range" className='form-control' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handelChange}/>
                </div>
                {/* End Room Price */}
                {/* Start Size*/}
                <div className="form-group">
                    <label htmlFor="size">
                        Room Size
                    </label>
                    <div className="size-inputs">
                        <input type="number" className='size-input' onChange={handelChange} name="minSize" id="size" value={minSize}/>
                        <input type="number" className='size-input' onChange={handelChange} name="maxSize" id="size" value={maxSize}/>
                    </div>
                </div>
                {/* End Size*/}
                {/* Start Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" onChange={handelChange} checked={breakfast} name="breakfast" id="breakfast"/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" onChange={handelChange} checked={pets} name="pets" id="pets"/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* End Extras */}
            </form>
        </section>
    )
}

export default RoomsFilter;