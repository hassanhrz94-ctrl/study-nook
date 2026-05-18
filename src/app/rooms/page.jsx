import RoomCard from '@/components/RoomCard';
import { fetchRooms } from '@/lib/booksData';
import React from 'react';



const RoomPage = async() => {

    const rooms = await fetchRooms();
    console.log(rooms);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        
           {
        rooms?.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
        </div>
    );
};

export default RoomPage;