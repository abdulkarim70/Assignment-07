import Logo from '../assets/logo-xl.png'
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
const Footer = () => {
  return (
    <footer className="bg-[#1A8862] text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <img className='w-[400px] h-[55px] mx-auto pb-4' src={Logo} alt="" />

        {/* Subtitle */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-8 whitespace-nowrap  ">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="text-lg font-medium mb-4">Social Links</h3>
        <div className="flex justify-center gap-4 mb-10">
          
          <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
           <img src={Instagram} alt=" Instagram" />
          </div>

          <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
            <img src={Facebook} alt="facebook" />
          </div>

          <div className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:scale-110 transition">
          <img src={Twitter} alt="twitter" />
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-400/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;