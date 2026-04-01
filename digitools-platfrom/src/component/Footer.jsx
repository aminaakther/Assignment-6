import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-[#0B0E14] text-gray-400 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
<div className="bg-[#0B0E14] text-white p-12">
      {/* Main Container: shob section pashapashi rakhar jonno flex use kora hoyeche */}
      <div className="flex flex-row justify-between items-start gap-8 max-w-7xl mx-auto">
        
        {/* 1. Brand Section */}
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Premium digital tools for creators, professionals, and businesses. 
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* 2. Product Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-6">Product</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">Features</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
            <li className="hover:text-white cursor-pointer transition">Templates</li>
            <li className="hover:text-white cursor-pointer transition">Integrations</li>
          </ul>
        </div>

        {/* 3. Company Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Press</li>
          </ul>
        </div>

        {/* 4. Resources Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-6">Resources</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Community</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* 5. Social Links Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-6">Social Links</h3>
          <div className="flex gap-3">
            {/* Social Icons (White Circles) */}
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:bg-gray-200 transition">
               <span className="text-xs">in</span>
            </div>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:bg-gray-200 transition">
               <span className="text-xs text-[10px]">f</span>
            </div>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:bg-gray-200 transition">
               <span className="text-xs">X</span>
            </div>
          </div>
        </div>

      </div>
    </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>


            <h1>hello</h1>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;