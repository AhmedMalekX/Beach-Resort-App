import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from "../context";
import Loading from './Loading'

function RoomsContainer({context})
{
    const {Loading,sortedRooms,rooms} = context;
    if (Loading)
        {
            return <Loading/>;
        }
            return (
                <>
                    <RoomsFilter rooms={rooms}/>
                    <RoomsList rooms={sortedRooms}/>
                </>
            )
}

export default withRoomConsumer(RoomsContainer)
{

}

// function RoomsContainer()
// {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                 const {Loading,sortedRooms,rooms} = value;
//                 if (Loading)
//                 {
//                     return <Loading/>;
//                 }
//                     return (
//                         <div>
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     );
// }
//
// export default RoomsContainer;