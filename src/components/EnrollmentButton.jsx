"use client";

import { Button } from "@heroui/react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function EnrollmentButton({ roomDetails }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleEnroll = async () => {
    try {
      const { data: jwtData } = await authClient.token();
      const token = jwtData?.token;

      if (!token) {
        toast.error("Authentication failed");
        return;
      }

      const updatedData = {
        userId: session?.user?.id,
        roomName: roomDetails?.roomName,
        studentName: session?.user?.name,
        studentEmail: session?.user?.email,
        seatCapacity: roomDetails?.seatCapacity,
        thumbnail: roomDetails?.thumbnail,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/books/${roomDetails?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        toast.success("Successfully added to My Bookings ✅");

        setTimeout(() => {
          router.push("/dashboard");
        }, 1200);
      } else {
        toast.error(data?.message || "Booking failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Button
        color="primary"
        size="lg"
        className="w-full font-bold shadow-lg mt-4"
        onClick={handleEnroll}
      >
        Book Now
      </Button>

      <Toaster position="top-center" />
    </>
  );
}