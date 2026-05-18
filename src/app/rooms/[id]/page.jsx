import { fetchRooms } from '@/lib/booksData';
import React from 'react';

const fetchRoomDetails = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`);
    const data = await res.json();
    return data || null;
}


const RoomDetailsPage = async({params}) => {
    const {id} = await params;

    const roomDetails = await fetchRoomDetails(id);
    console.log(roomDetails);
    const {roomName, description, _id, seatCapacity, floor, hourlyRate, thumbnail} = roomDetails || {};
    return (
        <div>
            this is room details page
            {
                roomDetails && (
                    <div>
                        <h1>{roomName}</h1> 
                        <p>{description}</p>
                        <p>Seat Capacity: {seatCapacity}</p>
                        <p>Floor: {floor}</p>
                        <p>Hourly Rate: {hourlyRate}</p>
                        <img src={thumbnail} alt={roomName} />
                    </div>
                )
            }
        </div>
    );
};

export default RoomDetailsPage;