import { auth } from '@/lib/auth';

import { headers } from 'next/headers';
import React from 'react';

const fetchRoomDetails = async (id, token) => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
    const data = await res.json();
    return data || {};

}


const RoomDetailsPage = async({params}) => {
    const {id} = await params;
 const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    const roomDetails = await fetchRoomDetails(id, token);
    console.log(roomDetails);
    const { _id, roomName, description,  seatCapacity, floor, hourlyRate, thumbnail} = roomDetails || {};
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