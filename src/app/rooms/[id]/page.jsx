import EnrollmentButton from '@/components/EnrollmentButton';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const fetchRoomDetails = async (id, token) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/books/${id}`,
        {
            headers: {
                authorization: `Bearer ${token}` || "",
            },
        }
    );

    const data = await res.json();
    return data || {};
};

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const roomDetails = await fetchRoomDetails(id, token);

    const {
        roomName,
        description,
        seatCapacity,
        floor,
        hourlyRate,
        thumbnail,
    } = roomDetails || {};

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                
                {/* Image Section */}
                <div className="w-full h-[350px] overflow-hidden">
                    <img
                        src={thumbnail}
                        alt={roomName}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-5">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h1 className="text-4xl font-bold text-gray-800">
                            {roomName}
                        </h1>

                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                            Floor {floor}
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        {description}
                    </p>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                        
                        <div className="bg-gray-50 border rounded-2xl p-5 shadow-sm">
                            <h2 className="text-gray-500 text-sm mb-1">
                                Seat Capacity
                            </h2>
                            <p className="text-2xl font-bold text-gray-800">
                                {seatCapacity} Seats
                            </p>
                        </div>

                        <div className="bg-gray-50 border rounded-2xl p-5 shadow-sm">
                            <h2 className="text-gray-500 text-sm mb-1">
                                Hourly Rate
                            </h2>
                            <p className="text-2xl font-bold text-green-600">
                                ${hourlyRate}/hr
                            </p>
                        </div>
                    </div>

                
                    <div className="pt-6">
                        <EnrollmentButton roomDetails={roomDetails} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsPage;