import { Button, Chip } from "@heroui/react";
import {
  Users,
  Star,
  ArrowRight,
  Clock3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ room }) => {
    const {_id, roomName, description, thumbnail } = room;
  return (
    <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={thumbnail}
          alt={roomName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Premium Badge */}
        <div className="absolute top-4 right-4">
          <Chip
            color="warning"
            variant="solid"
            className="font-bold shadow-lg"
          >
            Premium
          </Chip>
        </div>

        {/* Title */}
        <div className="absolute bottom-5 left-5 text-white">
          <h2 className="text-2xl font-bold">
            {roomName}
          </h2>

          <p className="text-sm text-slate-200">
            {description}   
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-5">

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          Modern premium meeting room with smart display,
          high-speed internet, air conditioning, and
          comfortable seating for your team.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-xl">
              <Users className="w-5 h-5 text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Capacity
              </p>

              <h4 className="font-bold text-slate-800">
                24 Seats
              </h4>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-xl">
              <Clock3 className="w-5 h-5 text-yellow-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Availability
              </p>

              <h4 className="font-bold text-slate-800">
                24/7 Open
              </h4>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4 fill-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400" />
          <Star className="w-4 h-4 fill-yellow-400" />

          <span className="text-sm font-medium text-slate-600 ml-2">
            5.0 Rating
          </span>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">

          <div>
            <p className="text-xs text-slate-500">
              Starting From
            </p>

            <h3 className="text-3xl font-black text-blue-600">
              $49
            </h3>
          </div>

          <Link href={`/rooms/${room._id}`}>
            <Button
              color="primary"
              radius="full"
              className="font-semibold px-6"
              endContent={<ArrowRight className="w-4 h-4" />}
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;