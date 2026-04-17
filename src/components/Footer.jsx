import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#1f4d3a] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">KeenKeeper</h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-8">
          <p className="text-gray-300 mb-4">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500/30 my-10"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
