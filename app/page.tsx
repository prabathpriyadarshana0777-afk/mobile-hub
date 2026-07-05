"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // Next.js Link එක මෙතනින් import කරලා තියෙනවා

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "/images/iphones.jpg",
      title: "Mint Condition iPhones",
      desc: "100% Genuine devices imported from USA & Japan. 95%+ Battery.",
      link: "/products",
    },
    {
      img: "/images/Androidphones.jpg",
      title: "Flagship Androids",
      desc: "Explore Samsung Galaxy, Google Pixel, and OnePlus deals.",
      link: "/products",
    },
    {
      img: "/images/Brandnew phones.jpg",
      title: "Sealed Brand New",
      desc: "TRCSL approved smartphones with 1-year agent warranty.",
      link: "/products",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header Section */}
      <header className="bg-white shadow-sm">
        <div className="block border-b py-3">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/4">
              {/* Logo Link වෙනස් කළා */}
              <Link href="/" className="flex items-center no-underline">
                <img src="/images/logo.png" alt="The Phone Hut Logo" className="h-12 mr-2" />
                <div className="leading-none font-sans">
                  <span className="block font-bold text-gray-900 text-lg tracking-wide">THE PHONE</span>
                  <span className="block font-bold text-gray-500 text-base tracking-[2.5px]">
                    HUT<span className="text-blue-600">.LK</span>
                  </span>
                </div>
              </Link>
            </div>

            <div className="w-1/2 px-4">
              <form className="relative flex w-full">
                <input
                  type="search"
                  placeholder="Search for products, brands and more..."
                  className="w-full h-11 bg-gray-100 border-none rounded-full pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </button>
              </form>
            </div>

            <div className="w-1/4 flex justify-end items-center gap-4">
              <div className="text-left text-sm">
                <span className="text-gray-500 block">24 Support</span>
                <strong className="text-gray-900">+94 77 123 4567</strong>
              </div>
              <div className="relative">
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <nav className="py-2 border-b lg:border-none">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            {/* Mobile Logo Link වෙනස් කළා */}
            <Link href="/" className="lg:hidden flex items-center mb-2">
              <span className="font-bold text-gray-900">THE PHONE HUT<span className="text-blue-600">.LK</span></span>
            </Link>

            <div className="flex flex-col lg:flex-row w-full items-center gap-4">
              <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg w-full lg:w-auto hover:bg-blue-700 transition">
                All Categories ▾
              </button>
              <ul className="flex gap-6 font-semibold text-gray-600">
                {/* Menu Links වෙනස් කළා */}
                <li><Link href="/" className="text-blue-600">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
                <li><Link href="/products" className="hover:text-blue-600 transition">All Phones</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* 2. Main Content */}
      <main className="container mx-auto px-4 my-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[400px]">
          
          {/* Slider Section */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden shadow-sm bg-gray-900 h-[300px] lg:h-full group">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-12 bg-gradient-to-r from-black/60 to-transparent text-white">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="hidden md:block text-lg mb-6 text-gray-200 max-w-md">{slide.desc}</p>
                  {/* Slider Link වෙනස් කළා */}
                  <Link href={slide.link} className="bg-blue-600 text-white px-6 py-2 rounded-full w-fit font-semibold hover:bg-blue-700 transition">
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Promo Cards */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 relative rounded-xl overflow-hidden shadow-sm group bg-gray-900">
              <img src="/images/headset.jpg" alt="Headset" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" />
              <div className="relative h-full flex flex-col justify-center p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded w-fit mb-2">Hot Deal</span>
                <h4 className="font-bold text-xl mb-1">Aurora Headsets</h4>
                <p className="text-sm text-gray-300 mb-3">Pure Bass Wireless Sound</p>
                {/* Promo Card Link 1 වෙනස් කළා */}
                <Link href="/products" className="font-bold text-sm hover:underline">Buy Now →</Link>
              </div>
            </div>
            
            <div className="flex-1 relative rounded-xl overflow-hidden shadow-sm group bg-gray-900">
              <img src="/images/jblspeakers.jpg" alt="Speaker" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" />
              <div className="relative h-full flex flex-col justify-center p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded w-fit mb-2">New Arrival</span>
                <h4 className="font-bold text-xl mb-1">JBL Speakers</h4>
                <p className="text-sm text-gray-300 mb-3">Waterproof, 12H Play</p>
                {/* Promo Card Link 2 වෙනස් කළා */}
                <Link href="/products" className="font-bold text-sm hover:underline">Explore →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="my-12 text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Shop by Category</h2>
          <p className="text-gray-500 mb-8">Explore our wide range of premium devices and accessories.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Used iPhones", desc: "95%+ Battery", img: "/images/iphones.jpg" },
              { name: "Used Androids", desc: "Flagship Models", img: "/images/Androidphones.jpg" },
              { name: "Brand New", desc: "Official Warranty", img: "/images/Brandnew phones.jpg" },
              { name: "Headsets", desc: "JBL, Boat & More", img: "/images/headset.jpg" },
              { name: "Speakers", desc: "Portable Bluetooth", img: "/images/jblspeakers.jpg" },
              { name: "Powerbanks", desc: "Mi, Samsung", img: "/images/powerbank.jpg" }
            ].map((category, index) => (
              // Category Card Links වෙනස් කළා
              <Link href="/products" key={index} className="block bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="h-24 flex items-center justify-center mb-3">
                  <img src={category.img} alt={category.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h6 className="font-bold text-gray-900">{category.name}</h6>
                <p className="text-xs text-gray-500 mt-1">{category.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* 3. Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-8">
        <p className="text-sm">&copy; 2026 The Phone Hut. All Rights Reserved.</p>
      </footer>
    </div>
  );
}