import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import img1 from "../assets/image/Qr Code.png";
import img2 from "../assets/image/GooglePlay.png";
import img3 from "../assets/image/AppStore.png";
import img4 from "../assets/image/icon-send.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#8B4513] text-white mt-5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive / Subscribe */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Exclusive</h4>
            <div className="h-[2px] w-10 bg-white opacity-20 mb-4" />

            <p className="text-xs text-white/90 mb-3">Subscribe</p>
            <div className="flex items-center border border-white rounded-md overflow-hidden w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent pl-3 py-2 text-white placeholder-white outline-none text-xs sm:text-sm"
              />
              <button className="flex items-center justify-center pr-4 py-2">
                <img src={img4} alt="Send Icon" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Support</h4>
            <div className="h-[2px] w-10 bg-white opacity-20 mb-4" />

            <ul className="text-xs space-y-1 text-white/90">
              <li>111 Bijoy Sarani, Dhaka, 1215</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Account</h4>
            <div className="h-[2px] w-10 bg-white opacity-20 mb-4" />

            <ul className="text-xs space-y-1 text-white/90">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Link</h4>
            <div className="h-[2px] w-10 bg-white opacity-20 mb-4" />

            <ul className="text-xs space-y-1 text-white/90">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Download App + QR + Social */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Download App</h4>
            <div className="h-[2px] w-10 bg-white opacity-20 mb-4" />

            <p className="text-xs text-white/90 mb-3">
              Save $3 with App New User Only
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {/* QR */}
              <img src={img1} alt="QR code" className="w-16 h-16 object-cover" />

              {/* Badges */}
              <div className="flex flex-col gap-2">
                <img src={img2} alt="Google Play" className="w-24 h-auto" />
                <img src={img3} alt="App Store" className="w-24 h-auto" />
              </div>
            </div>

            {/* social icons */}
            <div className="flex items-center gap-3 mt-4 text-white/90">
              <a href="#" aria-label="facebook" className="text-sm">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="twitter" className="text-sm">
                <FaTwitter />
              </a>
              <a href="#" aria-label="instagram" className="text-sm">
                <FaInstagram />
              </a>
              <a href="#" aria-label="linkedin" className="text-sm">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© Copyright Rimel 2022. All rights reserved</div>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span className="hover:underline cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
