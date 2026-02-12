import { Phone, Mail } from "lucide-react";

const SpecialOfferSidebar = () => {
  return (
    <div className="space-y-5">
      {/* Special Offer Card */}
      <div className="bg-red-600 text-white rounded-xl p-5">
        <h3 className="font-bold text-lg mb-1">Special Offer</h3>
        <p className="text-sm mb-3">
          Get <span className="text-2xl font-bold">40%</span>off on all courses
        </p>
        <div className="mb-2">
          <p className="text-xs text-red-200 mb-1">Like coupon Code</p>
          <div className="bg-white rounded-md px-3 py-2">
            <span className="text-gray-900 font-semibold text-sm">TRADE40</span>
          </div>
        </div>
        <p className="text-xs text-red-200">valid for next 48 hours only!</p>
      </div>

      {/* Quick Enquiry Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="font-bold text-base mb-1">Quick Enquiry</h3>
        <p className="text-xs text-gray-500 mb-4">Get instant course details & offer</p>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-gray-700 mb-1 block">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 mb-1 block">Email Address</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 mb-1 block">Phone Number</label>
            <input
              type="tel"
              placeholder="+913456789"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 mb-1 block">Select Course</label>
            <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>~ Choose a Course</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700 mb-1 block">Apply Coupon</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="ENTER COUPON CODE"
                className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors">
            Submit Enquiry
          </button>
        </div>
      </div>

      {/* Need Help Card */}
      <div className="bg-cyan-500 text-white rounded-xl p-5">
        <h3 className="font-bold text-sm mb-3">Need Help?</h3>
        <div className="space-y-2">
          <a href="tel:+919876543210" className="flex items-center gap-2 bg-red-500 rounded-lg px-3 py-2.5 text-sm hover:bg-red-600 transition-colors">
            <Phone className="w-4 h-4" />
            <div>
              <p className="font-semibold text-xs">Call Us</p>
              <p className="text-xs text-white/80">+919876543210</p>
            </div>
          </a>
          <a href="mailto:info@stockbazaari.com" className="flex items-center gap-2 bg-red-500 rounded-lg px-3 py-2.5 text-sm hover:bg-red-600 transition-colors">
            <Mail className="w-4 h-4" />
            <div>
              <p className="font-semibold text-xs">Email Us</p>
              <p className="text-xs text-white/80">info@stockbazaari.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferSidebar;
