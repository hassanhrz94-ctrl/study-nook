
import { addRoom } from '@/lib/rooms/action';
import {
  Button,
  Input,
  TextArea,
  Checkbox,
} from '@heroui/react';
import {
  DoorOpen,
  Image as ImageIcon,
  DollarSign,
  Users,
  Building2,
  Wifi,
  Monitor,
  Snowflake,
  VolumeX,
  Plug,
  Presentation,
} from 'lucide-react';

import { redirect } from 'next/navigation';

const amenitiesList = [
  {
    label: 'Whiteboard',
    value: 'Whiteboard',
    icon: Presentation,
  },
  {
    label: 'Projector',
    value: 'Projector',
    icon: Monitor,
  },
  {
    label: 'Wi-Fi',
    value: 'Wi-Fi',
    icon: Wifi,
  },
  {
    label: 'Power Outlets',
    value: 'Power Outlets',
    icon: Plug,
  },
  {
    label: 'Quiet Zone',
    value: 'Quiet Zone',
    icon: VolumeX,
  },
  {
    label: 'Air Conditioning',
    value: 'Air Conditioning',
    icon: Snowflake,
  },
];

export default function AddRoomPage() {

  const handleAddRoom = async (formData) => {
    "use server";

    const amenities = formData.getAll('amenities');

    const roomData = {
      roomName: formData.get('roomName'),
      description: formData.get('description'),
      image: formData.get('image'),
      floor: formData.get('floor'),
      capacity: Number(formData.get('capacity')),
      hourlyRate: Number(formData.get('hourlyRate')),
      amenities,
    };

    const data = await addRoom(roomData);

    if (data?.insertedId) {
      redirect('/rooms');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-200 p-6 md:p-10">

        {/* header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-100 flex items-center justify-center mb-5">
            <DoorOpen className="w-10 h-10 text-blue-600" />
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900">
            Add New Meeting Room
          </h1>

          <p className="text-slate-500 mt-3 font-medium">
            Create and manage your workspace rooms easily
          </p>
        </div>

        <form action={handleAddRoom} className="space-y-8">

          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* room name */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-slate-700 mb-2 block">
                Room Name
              </label>

              <Input
                name="roomName"
                required
                placeholder="e.g. Creative Discussion Room"
             
                className="w-full"
              />
            </div>

            {/* description */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-slate-700 mb-2 block">
                Description
              </label>

              <TextArea
                name="description"
                required
                minRows={5}
                placeholder="Describe the room facilities and environment..."
                className="w-full"
              />
            </div>

            {/* image */}
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">
                Image URL
              </label>

              <Input
                type="url"
                name="image"
                required
                placeholder="https://images.unsplash.com/..."
                startContent={
                  <ImageIcon className="w-5 h-5 text-slate-400" />
                }
              />
            </div>

            {/* floor */}
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">
                Floor
              </label>

              <Input
                name="floor"
                required
                placeholder="e.g. 3rd Floor"
                startContent={
                  <Building2 className="w-5 h-5 text-slate-400" />
                }
              />
            </div>

            {/* capacity */}
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">
                Capacity
              </label>

              <Input
                type="number"
                name="capacity"
                required
                placeholder="e.g. 4"
                startContent={
                  <Users className="w-5 h-5 text-slate-400" />
                }
              />
            </div>

            {/* hourly rate */}
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">
                Hourly Rate ($)
              </label>

              <Input
                type="number"
                name="hourlyRate"
                required
                placeholder="e.g. 5"
               
              />
            </div>

          </div>

          {/* amenities */}
          <div>
            <label className="text-sm font-bold text-slate-700 mb-4 block">
              Amenities
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {amenitiesList.map((item) => {
                const Icon = item.icon;

                return (
                  <label
                    key={item.value}
                    className="border border-slate-200 rounded-2xl p-4 flex items-center gap-3 hover:border-blue-500 hover:bg-blue-50 transition cursor-pointer"
                  >
                    <Checkbox
                      name="amenities"
                      value={item.value}
                    />

                    <Icon className="w-5 h-5 text-blue-600" />

                    <span className="font-medium text-slate-700">
                      {item.label}
                    </span>
                  </label>
                );
              })}

            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <Button
              type="button"
              variant="flat"
              className="h-14 rounded-2xl font-bold w-full"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              color="primary"
              className="h-14 rounded-2xl font-black w-full"
            >
              Add Room
            </Button>

          </div>

        </form>
      </div>
    </div>
  );
}