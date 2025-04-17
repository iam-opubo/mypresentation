

function MobileApps() {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-10 p-6 text-center md:text-left mt-[-100px]">
  
  {/* Text and Button Section */}
  <div className="max-w-md">
    <h1 className="text-3xl font-bold pt-20 leading-[48px] ">
      Download our<br />
      mobile apps
    </h1>

    <img src="img/Rectangle 2.png" alt="App Store Buttons" className="mx-auto md:mx-0 mb-4 pt-8" />

    <p className="text-gray-700 pt-3 font-mulish font-light leading-[30px]" >
      Our dedicated patient engagement app and<br />
      web portal let you access
      information<br/> instantly (no tedious forms, long calls,<br/> 
      or administrative hassle) and securely.
    </p>

    {/* Download Button Section */}
    
    <div className="pt-6 flex justify-center mt-4 md:ml-0 ml-4 md:mr-32">
  <div className="w-[200px] h-auto md:h-[68px] rounded-full flex flex-col md:flex-row items-center justify-center border-2 border-blue-500 shadow-lg p-3 space-y-2 md:space-y-0 md:space-x-2">
    <button
      type="button"
      className="text-blue-500 text-lg font-semibold cursor-pointer"
    >
      Download
    </button>
    <img
      src="img/Vector 1.png"
      alt="Download icon"
      className="w-4 h-4"
    />
  </div>
</div>








  </div>

  {/* Image Section */}
  <div>
    <img src="img/trafalgar-illustration sec3.png" alt="App Illustration" className="w-full max-w-md object-contain" />
  </div>

</div>

  
   

  



    
  )
}

export default MobileApps









