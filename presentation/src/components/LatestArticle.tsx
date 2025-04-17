

function LatestArticle() {
  return (
    <div className="p-4">
    {/* Heading */}
    <div className="flex flex-col items-center justify-center gap-6 mt-[-30px]">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mt-40">
        Check out our latest article
      </h1>
    </div>
  
    {/* Top Image */}
    <div className="flex justify-center mt-9">
      <img
        src="img/Rectangle 2.png"
        alt="Rectangle"
        className="w-20 sm:w-52 md:w-[60px] h-auto mb-15"
      />
    </div>
  
    {/* Cards Section */}
    <div className="flex flex-col md:flex-row justify-center relative items-center md:items-start gap-6 ">
      {/* Background element */}
      <div className="absolute top-[-32px] right-10 z-0 mr-298">
        <img
          src="img/element.png"
          alt="element"
          className="w-20 h-20 object-contain"
        />
      </div>
  
      {/* Card 1 */}
      <div className="h-auto relative z-10 mb-10 md:ml-[85px]  w-[90%] md:w-auto">
        <img src="img/Mask Group 1.png" alt="mask" />
        <div className="ml-5 md:ml-10">
          <h1 className="mt-4 font-bold">
            Disease detection, check<br /> up in the laboratory
          </h1>
          <p className="mt-2 font-mulish font-light leading-[28px]">
            In this case, the role of the health<br />
            laboratory is very important to do<br /> a disease detection.
          </p>
          <div className="flex items-center mt-3">
            <h1 className="font-bold text-blue-600 font-mulish">Read More</h1>
            <img src="img/right mask.png" alt="right mask" className="ml-2 mt-1 w-5" />
          </div>
        </div>
      </div>
  
      {/* Card 2 */}
      <div className="h-auto relative z-10 mb-10  w-[90%] md:w-auto">
        <img src="img/Mask Group 1.png" alt="mask" />
        <div className="ml-5 md:ml-10">
          <h1 className="mt-4 font-bold">
            Herbal medicines that are<br /> safe for consumption
          </h1>
          <p className="mt-2 font-mulish font-light leading-[28px]">
            In this case, the role of the health<br />
            laboratory is very important to do<br /> a disease detection.
          </p>
          <div className="flex items-center mt-3">
            <h1 className="font-bold text-blue-600 font-mulish">Read More</h1>
            <img src="img/right mask.png" alt="right mask" className="ml-3 mt-1 w-5" />
          </div>
        </div>
      </div>
  
      {/* Card 3 */}
      <div className="h-auto relative z-10 mb-10  w-[90%] md:w-auto">
        <img src="img/Mask Group 1.png" alt="mask" />
        <div className="ml-5 md:ml-10 font-mulish font-light leading-[28px]">
          <h1 className="mt-4 font-bold">
            Natural care for healthy<br /> facial skin
          </h1>
          <p className="mt-2">
            A healthy lifestyle should start from<br /> now and also for your
            skin health.<br /> There are some...
          </p>
          <div className="flex items-center mt-1">
            <h1 className="font-bold text-blue-600 font-mulish">Read More</h1>
            <img src="img/right mask.png" alt="right mask" className="ml-3 mt-1 w-5" />
          </div>
        </div>
      </div>
  
      {/* Blue Background Element */}
      <div className="absolute top-[-160px] right-[-30px] z-0 hidden md:block">
        <img
          src="img/element blue.png"
          alt="element blue"
          className="w-[550px] h-[590px] object-contain opacity-70"
        />
      </div>
    </div>
  
    {/* Button */}
    <div className="pt-6 flex justify-center mt-[-30px]">
      <div className="w-[200px] h-[68px] rounded-full flex items-center justify-center border-2 border-blue-500 shadow-lg">
        <button className="text-blue-500 text-lg font-semibold cursor-pointer">
          Learn more
        </button>
      </div>
    </div>
  </div>
  
  
  

  )
}

export default LatestArticle
