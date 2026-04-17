import Logo from "../assets/logo-xl.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#1A8862] text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
       
        <img
          className="w-[220px] sm:w-[300px] md:w-[400px] h-auto mx-auto pb-4"
          src={Logo}
          alt="logo"
        />

     
        <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed px-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

       
        <h3 className="text-base sm:text-lg font-medium mb-4">
          Social Links
        </h3>

      
        <div className="flex justify-center gap-4 sm:gap-6 mb-10">
          
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full cursor-pointer hover:scale-110 transition">
            <img className="w-5 h-5 sm:w-6 sm:h-6" src={Instagram} alt="Instagram" />
          </div>

          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full cursor-pointer hover:scale-110 transition">
            <img className="w-5 h-5 sm:w-6 sm:h-6" src={Facebook} alt="Facebook" />
          </div>

          <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full cursor-pointer hover:scale-110 transition">
            <img className="w-5 h-5 sm:w-6 sm:h-6" src={Twitter} alt="Twitter" />
          </div>

        </div>

     
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-200 gap-3">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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