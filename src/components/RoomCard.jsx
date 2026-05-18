import { Button, Chip } from "@heroui/react";
import {
  Users,
  Building2,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const RoomCard = ({ room }) => {
  const {
    roomName,
    description,
    thumbnail,
    floor,
    seatCapacity,
    hourlyRate,
  } = room;

  return (
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={
            thumbnail ||
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
          }
          alt={roomName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Floor Badge */}
        <div className="absolute top-4 right-4">
          <Chip
            color="primary"
            variant="solid"
            className="font-semibold shadow-lg"
          >
            Floor {floor}
          </Chip>
        </div>

        {/* Room Name */}
        <div className="absolute bottom-5 left-5 text-white">
          <h2 className="text-2xl font-bold">{roomName}</h2>
          <p className="text-sm text-slate-200">
            Premium Meeting Space
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-5">

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          
          <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-xl">
              <Users className="w-5 h-5 text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Capacity</p>
              <h4 className="font-bold text-slate-800">
                {seatCapacity} Seats
              </h4>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="bg-emerald-100 p-2 rounded-xl">
              <Building2 className="w-5 h-5 text-emerald-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Room Type</p>
              <h4 className="font-bold text-slate-800">
                Conference
              </h4>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          
          <div>
            <p className="text-xs text-slate-500">
              Hourly Rate
            </p>

            <div className="flex items-center text-blue-600">
              <DollarSign className="w-5 h-5" />
              <span className="text-3xl font-black">
                {hourlyRate ? `$${hourlyRate}` : "Contact Us"}
              </span>
            </div>
          </div>

          <Button
            color="primary"
            radius="full"
            className="font-semibold px-6"
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;