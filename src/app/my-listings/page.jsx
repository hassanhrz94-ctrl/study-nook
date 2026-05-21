


import { EditRoom } from "@/components/EditRoom";
import { Button } from "@heroui/react";
import Image from "next/image";

import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/books/${id}`);
  const destination = await res.json();

  const {_id, roomName, description, thumbnail,  seatCapacity,
        floor,
        hourlyRate,} =
    destination;
            
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
        <EditRoom destination={destination} />
         {/* <DeleteAlert destination={destination}/> */}
      </div>
      <Image
        className="w-full h-100 object-cover"
        alt={roomName}
        src={thumbnail}
        height={500}
        width={800}
      />

      <div className="p-2 flex flex-col gap-5">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{description}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{roomName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegCalendar /> {hourlyRate} per hour
            </div>
          </div>
{/* <BookingCard destination={destination} /> */}
        </div>

        <h1 className="mt-10 text-2xl font-bold">Overview</h1>

        <p>{seatCapacity} seats available on floor {floor}</p>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;