import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="">
          <h4 className="text-[1.8vw] font-semibold mb-2">Company</h4>
          <ul className="">
            <li><a href="#" className="hover:underline text-[1.5vw]  ">About Us</a></li>
            <li><a href="#" className="hover:underline text-[1.5vw]">Careers</a></li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-[1.8vw] font-semibold mb-4">View Website in</h4>
          <ul>
            <li className="flex items-center space-x-2 text-[1.5vw]">
              <span className="text-[#f9f9f944]">&#10003;</span>
              <span>English</span>
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-[1.8vw] font-semibold mb-4">Need Help?</h4>
          <ul className="">
            <li><a href="https://help.hotstar.com/in/en/support/home" className="hover:underline text-[1.5vw]">Visit Help Center</a></li>
            <li><a href="https://help.hotstar.com/in/en/support/tickets/feedback" className="hover:underline text-[1.5vw]">Share Feedback</a></li>
          </ul>
        </div>

        <div className="">
          <h4 className="text-[1.8vw] font-semibold mb-4">Connect with Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/DisneyPlusHotstar" className="hover:text-gray-400">
             <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a href="https://twitter.com/DisneyPlusHS" className="hover:text-gray-400">
             <i className="ri-twitter-x-fill text-xl"></i>
            </a>

          </div>
          <div className="flex space-x-4">
            <a href="https://play.google.com/store/apps/details?id=in.startv.hotstar&pli=1">
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"
                alt="Google Play"
                className="w-32"
              />
            </a>
            <a href="https://apps.apple.com/in/app/hotstar-movies-live-cricket/id934459219">
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"
                alt="App Store"
                className="w-32"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-4 pt-4 text-sm text-gray-500 text-center">
        <p>&copy; 2024 STAR. All Rights Reserved.</p>
        <p className="space-x-4 ">
          <a href="#" className="hover:underline">Terms Of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">FAQ</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
