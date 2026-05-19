import RoomCard from '@/components/RoomCard';
import RoomHeader from '@/components/RoomHeader';
import { fetchRooms } from '@/lib/booksData';
import React from 'react';



const RoomPage = async({ searchParams }) => {
     const sParams = await searchParams;
    // console.log(sParams);


    const rooms = await fetchRooms(sParams?.searchTerm || "")


    console.log(rooms);
    return (


        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        <RoomHeader/>
           {
        rooms?.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
        </div>
    );
};

export default RoomPage;