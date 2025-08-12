import { Navbar } from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-[url(../public/sanddunes.jpg)] bg-black/20 bg-blend-multiply bg-cover bg-center h-screen">
        {/* Hero Section */}
        <Navbar />

        <section className="grid grid-cols-1 grid-rows-5 lg:grid-cols-5 lg:grid-rows-6 max-h-screen px-8 text-left text-white overflow-hidden pb-20 ">
          {/* Content */}
          <div className="z-10 row-start-4 lg:row-start-5 lg:col-span-3 content-center px-4 animate-slide-up ">
            <h1 className="text-4xl md:text-6xl font-medium mb-4 ">
              Discover the Magic of the Sahara
            </h1>
            <p className="text-sm md:text-xl font-extralight mb-8 w-[75%]">
              Experience breathtaking dunes, unforgettable sunsets, and an
              adventure like no other.
            </p>
            <Link
              href="/plan-trip"
              className="lg:hidden backdrop-blur-md bg-white text-black border font-regular px-6 py-3 rounded-full shadow-lg transition"
            >
              Plan Your Trip
            </Link>
          </div>
          <Link
            href="/plan-trip"
            className="hidden cursor-pointer lg:flex justify-center items-center lg:col-start-5 lg:row-start-6 bg-white text-black h-[50%] w-[70%] border mx-auto rounded-full"
          >
            Plan Your Trip
          </Link>
        </section>
      </main>
    </>
  );
}
