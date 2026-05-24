"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Star, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const heroSlides = [
  {
    title: "Find Your Perfect Study Room",
    description:
      "Browse and book quiet, private study rooms in your library. List your own room and earn.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Book Quiet Spaces Anytime",
    description:
      "Discover peaceful and comfortable study environments designed for productivity and focus.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Study Smarter Together",
    description:
      "Connect with students, reserve collaborative rooms, and make learning more effective.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-40 md:w-72 h-40 md:h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 md:w-72 h-40 md:h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>

      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-700 text-xs sm:text-sm font-semibold">
                    <Star className="w-4 h-4 fill-blue-600" />
                    Trusted by 5,000+ Students
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
                    {slide.title.split(" ").slice(0, -2).join(" ")}{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {slide.title.split(" ").slice(-2).join(" ")}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                    <Button
                      as={Link}
                      href="/rooms"
                      color="primary"
                      size="lg"
                      className="w-full sm:w-auto h-12 sm:h-14 px-8 text-base sm:text-lg font-semibold rounded-full shadow-xl shadow-blue-500/20 group"
                    >
                      Explore Rooms
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                      variant="bordered"
                      size="lg"
                      className="w-full sm:w-auto h-12 sm:h-14 px-8 text-base sm:text-lg font-semibold rounded-full"
                    >
                      Learn More
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-8 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 sm:p-3 bg-blue-100 rounded-xl">
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          1,000+
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500">
                          Study Rooms
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 sm:p-3 bg-indigo-100 rounded-xl">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          10K+
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500">
                          Students
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative group order-1 lg:order-2">
                  {/* Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

                  {/* Image Card */}
                  <div className="relative overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] bg-white p-2 shadow-2xl">
                    <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                      <Image
                        src={slide.image}
                        alt="Study Room"
                        fill
                        priority
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Floating Card */}
                    <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-3 sm:p-5 shadow-xl">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex -space-x-2 sm:-space-x-3">
                          {[1, 2, 3, 4].map((i) => (
                            <Image
                              key={i}
                              src={`https://i.pravatar.cc/100?img=${i + 10}`}
                              alt="student"
                              width={42}
                              height={42}
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>

                        <div>
                          <h4 className="font-bold text-slate-900 text-xs sm:text-base">
                            500+ Bookings Today
                          </h4>
                          <p className="text-[10px] sm:text-sm text-slate-500">
                            Students are actively reserving rooms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Right */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;