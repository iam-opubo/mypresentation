

 function LeadingHealthcare() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-10 gap-10 text-center md:text-left ml-0 md:ml-40">

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="img/trafalgar-illustration sec2.png"
        alt="sec2"
        className="w-full max-w-md object-contain"
      />
    </div>
  
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Leading Healthcare<br /> Providers
      </h1>
  
      {/* Placeholder Image Below Heading */}
      <img
        src="img/Rectangle 2.png"
        alt="Decorative"
        className="w-20 h-auto mt-4 mx-auto md:mx-0"
      />
  
      <div className="pt-5 leading-loose font-mulish">
        <h1>
          Trafalgar provides progressive, and affordable<br /> healthcare, accessible on 
          mobile and online for<br /> everyone. To us, it’s not just work. We take pride<br /> 
          in the solutions we deliver.
        </h1>
      </div>
  
      <div className="pt-6 flex justify-center mt-4">
        <div className="w-[200px] h-[68px] rounded-full flex items-center justify-center border-2 border-blue-500 shadow-lg">
          <button className="text-blue-500 text-lg font-semibold cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
  
    </div>
  
  </div>
  



  
  )
}


export default LeadingHealthcare
