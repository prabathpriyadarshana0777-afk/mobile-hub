// app/about/page.tsx
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Simple Header for Navigation */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
           <Link href="/" className="font-bold text-gray-900 text-xl tracking-wide">
              THE PHONE HUT<span className="text-blue-600">.LK</span>
           </Link>
           <Link href="/" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
              ← Back to Home
           </Link>
        </div>
      </header>

      {/* Main About Section */}
      <main className="container mx-auto px-4 py-12 lg:py-20">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Section */}
            <div className="relative h-64 lg:h-full min-h-[400px]">
              {/* දැනටමත් තියෙන පින්තූරයක් මෙතනට පාවිච්චි කර ඇත */}
              <img 
                src="/images/iphones.jpg" 
                alt="The Phone Hut Devices" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-bold">Premium Quality You Can Trust</h3>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase mb-2">Our Story</span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Delivering Premium Smartphones Since 2007.
              </h1>
              
              <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                Established in <strong>2007</strong>, The Phone Hut has grown to become a highly trusted destination for top-tier mobile devices in Sri Lanka. With over a decade of experience, we know exactly what our customers value: quality, reliability, and affordability.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We specialize in premium <strong>used iPhones and flagship Android smartphones</strong>. To maintain our highest standards, every single device is carefully imported directly from <strong>Singapore</strong>. Our experts conduct strict quality and battery checks so that you get a device that looks and performs just like a brand-new phone.
              </p>

              {/* Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                  <h4 className="font-bold text-blue-700 text-2xl mb-1">2007</h4>
                  <p className="text-xs text-blue-600 font-semibold uppercase">Established</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                  <h4 className="font-bold text-blue-700 text-xl mb-1 mt-1">Singapore</h4>
                  <p className="text-xs text-blue-600 font-semibold uppercase">Direct Imports</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                  <h4 className="font-bold text-blue-700 text-2xl mb-1">100%</h4>
                  <p className="text-xs text-blue-600 font-semibold uppercase">Quality Checked</p>
                </div>
              </div>
              
              {/* Call to Action Button */}
              <div>
                <Link href="/products" className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg">
                  Explore Our Phones
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-8">
        <p className="text-sm">&copy; 2026 The Phone Hut. All Rights Reserved.</p>
      </footer>
    </div>
  );
}