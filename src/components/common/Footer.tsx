import { Phone, Mail, MapPin } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      {/* Contact Banner */}
      <section className="px-1 md:px-6 lg:px-8 mb-10">
        <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#4f46e5] to-[#9ec5d8] px-3 py-10 md:py-12">

          {/* Faded background text */}
          <span className="absolute right-10 top-[80%] -translate-y-1/2 text-4xl md:text-7xl font-bold text-white/45 sm:text-white/10 pointer-events-none">
            StockBazaari
          </span>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Left Content */}
            <div>
              <h2 className="text-xl md:text-4xl font-semibold text-white mb-2">
                Contact Us for Assistance
              </h2>
              <p className="text-white/80 text-sm md:text-base mb-5">
                Experienced stock market guide to gain benefits
              </p>

              <button className="bg-[#0b0f3b] text-white px-6 py-3 rounded-lg text-sm font-medium">
                Our areas of stock
              </button>
            </div>

            {/* Logo Right */}
            <div className="flex items-center gap-3">
              <img
                src="img/logo.png"
                alt="logo"
                className="hidden sm:block sm:w-50 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="px-3 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="img/logo.png" alt="logo" className="w-30" />
            </div>

            <p className="text-sm text-gray-600 mb-5">
              Your trusted partner in stock market education and trading success.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded-md flex items-center justify-center text-white">
                <Facebook size={18} />
              </div>

              <div className="w-9 h-9 bg-sky-500 rounded-md flex items-center justify-center text-white">
                <Twitter size={18} />
              </div>

              <div className="w-9 h-9 bg-pink-500 rounded-md flex items-center justify-center text-white">
                <Instagram size={18} />
              </div>

              <div className="w-9 h-9 bg-blue-800 rounded-md flex items-center justify-center text-white">
                <Linkedin size={18} />
              </div>

              <div className="w-9 h-9 bg-red-600 rounded-md flex items-center justify-center text-white">
                <Youtube size={18} />
              </div>

              <div className="w-9 h-9 bg-green-600 rounded-md flex items-center justify-center text-white">
                <MessageCircle size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Compliance</li>
              <li>Advisory</li>
              <li>Algo Trading</li>
              <li>Courses</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Disclaimer</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Phone size={16} /> +919876543210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@stockbazaari.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
