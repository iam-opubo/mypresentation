function Header() {
  return (
  
    
    <div className="relative">
      {/* Background Image Behind */}
      <div className="absolute left-[-80px] top-[-100px] z-0 ml-27 mt-40">
        <img 
        src="img/blue dots.png" 
        alt="element" 
        className="w-13 h-55 sm:w-32 md:w-35 opacity-50"
        />
      </div>

  <header className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-10 md:px-12 md:py-20 mx-auto max-w-screen-xl mr-15">
        {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Virtual Healthcare <br /> for you
        </h1>
      <p className="text-gray-600 mb-4 text-lg sm:text-xl md:text-2xl px-6 md:px-0">
          Trafalgar provides progressive and affordable <br />
          healthcare, accessible on mobile and online <br />
          for everyone.
      </p>
      <div className="bg-blue-600 text-white py-3 px-4 mt-10 rounded-full w-[80%] sm:w-[70%] 
        md:w-[50%] lg:w-[45%] mx-auto md:mx-0 hover:bg-blue-700 transition text-center font-bold text-xl cursor-pointer">
        Consult today
      </div>
    </div>

    {/* Image Content */}
    <div className="w-full md:w-200 flex justify-center md:justify-start md:pl-10">
      <img
        src="img/illustration.png"
        alt="illustration"
        className="w-[95%] sm:w-[95%] md:w-[95%] lg:w-[90%] xl:w-[85%] object-contain"
      />
    </div>
  </header>
</div>





  )
}



export default Header;



