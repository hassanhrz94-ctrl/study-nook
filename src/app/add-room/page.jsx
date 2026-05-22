"use client";

import { useState } from "react";
import { Button, Input, TextArea, Checkbox } from "@heroui/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const amenitiesOptions = [
  { label: "Whiteboard", icon: "✏️" },
  { label: "Projector", icon: "📽️" },
  { label: "Wi-Fi", icon: "📶" },
  { label: "Power Outlets", icon: "🔌" },
  { label: "Quiet Zone", icon: "🤫" },
  { label: "Air Conditioning", icon: "❄️" },
];

const AddRoomPage = () => {
  const router = useRouter();
  const [amenities, setAmenities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmenities = (value) => {
    setAmenities((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;

    const roomData = {
      roomName: form.roomName.value,
      description: form.description.value,
      image: form.image.value,
      floor: form.floor.value,
      capacity: Number(form.capacity.value),
      hourlyRate: Number(form.hourlyRate.value),
      amenities,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(roomData),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Room added successfully!");
        form.reset();
        setAmenities([]);
        router.push("/my-rooms");
      } else {
        toast.error(data?.message || "Failed to add room");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Toaster position="top-right" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Add New Room</h1>
          <p className="text-gray-500 mt-1 text-sm">Fill in the details to list your meeting room</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Room Name" name="roomName" placeholder="Conference Room A" variant="bordered" radius="lg" isRequired />
              <Input label="Floor" name="floor" placeholder="3rd Floor" variant="bordered" radius="lg" isRequired />
              <Input type="number" label="Capacity" name="capacity" placeholder="10" variant="bordered" radius="lg" isRequired />
              <Input type="number" label="Hourly Rate ($)" name="hourlyRate" placeholder="25" variant="bordered" radius="lg" isRequired />
            </div>

            {/* Image URL */}
            <Input type="url" label="Image URL" name="image" placeholder="https://example.com/room.jpg" variant="bordered" radius="lg" isRequired />

            {/* Description */}
            <TextArea label="Description" name="description" placeholder="Write room description..." variant="bordered" radius="lg" minRows={4} isRequired />

            {/* Amenities */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">Amenities</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenitiesOptions.map(({ label, icon }) => {
                  const selected = amenities.includes(label);
                  return (
                    <div
                      key={label}
                      onClick={() => handleAmenities(label)}
                      className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all
                        ${selected
                          ? "border-cyan-500 bg-cyan-50"
                          : "border-gray-200 hover:border-cyan-300 hover:bg-gray-50"
                        }`}
                    >
                      <span className="text-lg">{icon}</span>
                      <Checkbox isSelected={selected} isReadOnly className="pointer-events-none">
                        <span className="text-sm text-gray-700">{label}</span>
                      </Checkbox>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full h-12 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl text-base"
            >
              Add Room
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoomPage;