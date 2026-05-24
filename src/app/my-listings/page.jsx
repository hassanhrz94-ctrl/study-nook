import React from "react";
import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { Pencil, Trash2, Users, Building2, DollarSign } from "lucide-react";

const MyListings = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booked`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Listings
        </h1>
        <p className="text-gray-500 mt-2">
          Manage all your conference rooms easily.
        </p>
      </div>

      {/* Empty State */}
      {data?.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border rounded-2xl bg-gray-50">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Listings Found
          </h2>
          <p className="text-gray-500 mt-2">
            You have not added any room yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.map((booking) => (
            <div
              key={booking._id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={
                    booking.image ||
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200"
                  }
                  alt={booking.roomName}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4">
                  <Chip color="primary" variant="solid">
                    Floor {booking.floor}
                  </Chip>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Title */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 capitalize">
                    {booking.roomName}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {booking.description}
                  </p>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                    <Users className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-xs text-gray-500">Capacity</p>
                      <p className="font-semibold">
                        {booking.capacity} People
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-xs text-gray-500">Rate</p>
                      <p className="font-semibold">
                        ${booking.hourlyRate}/hr
                      </p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Amenities
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {booking.amenities?.map((item, index) => (
                      <Chip
                        key={index}
                        variant="flat"
                        color="secondary"
                        size="sm"
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    color="primary"
                    variant="flat"
                    className="w-full font-semibold"
                    startContent={<Pencil size={18} />}
                  >
                    Edit
                  </Button>

                  <Button
                    color="danger"
                    variant="flat"
                    className="w-full font-semibold"
                    startContent={<Trash2 size={18} />}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListings;