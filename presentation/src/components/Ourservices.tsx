// import React from 'react'

function Ourservices() {
  return (

    <div className="p-6">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h1>
  
      <div className="flex justify-center">
        <img src="img/Rectangle 2.png" />
      </div>
    </div>
  
    {/* Description Section */}
    <div className="w-full text-gray-600 text-center">
      <p className="text-lg p-10">
        We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment<br />
        with our highly qualified doctors you can consult with us which type of service is suitable for your health
      </p>
    </div>
  
    <div className="flex justify-center items-center">
      <div className="p-8">
        {/* Main grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
  
          {/* Frame Image positioned absolutely */}
          <div className="relative col-span-1 sm:col-span-2 md:col-span-1">
            <div className="absolute top-[-150px] left-[100px] z-10">
              <img
                src="img/Frame.png"
                alt="Frame"
                className="w-[900px] h-[800px] ml-30"
              />
            </div>
          </div>
  
          {/* Other images in grid layout */}
          <div className="flex justify-center items-center md:ml-[-150px]">
            <div className="p-8 w-full">
  
              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 z-10 relative w-full border-0 mt-5 ml-[-40px]">
  
                {/* Service Card 1 */}
                <div className="p-4 border-0 border rounded-lg shadow bg-white h-80 shadow-lg w-65 ml-[-20px]">
                  <img src="img/Frame 2 services.png" alt="Search doctor" className="w-30 h-35 mb-2 ml-9 pt-4" />
                  <h2 className="font-bold text-lg pt-5 ml-9 ">Search Doctor</h2>
                  <p className="pt-4 ml-9">Find your doctor from thousands of specialists and hospitals.</p>
                </div>
  
                {/* Service Card 2 */}
                <div className="p-4 border-0 rounded-lg shadow bg-white h-80 shadow-lg w-65 ml-18">
                  <img src="img/Frame 3 services.png" alt="Online Pharmacy" className="w-20 h-33 mb-2 ml-9 pt-4" />
                  <h2 className="font-bold text-lg pt-5 ml-9 ">Online Pharmacy</h2>
                  <p className="pt-4 ml-9 leading-loose">Buy your medicines easily with home delivery.</p>
                </div>
  
                {/* Service Card 3 */}
                <div className="p-4 border-0 rounded-lg shadow bg-white h-80 shadow-lg w-68 ml-40">
                  <img src="img/contacts.png" alt="consultation" className="w-20 h-30 mb-2 ml-9 pt-4" />
                  <h2 className="font-bold text-lg pt-5 ml-9">Consultation</h2>
                  <p className="pt-3 ml-9 ">
                    Free consultation with our trusted doctors and get the best recommendations.
                  </p>
                </div>
  
                {/* Service Card 4 */}
                <div className="p-4 border-0 rounded-lg shadow bg-white h-80 shadow-lg w-65 ml-[-20px]">
                  <img src="img/Frame 5 services.png" alt="Details Info" className="w-25 h-40 mb-2 ml-9 pt-4" />
                  <h2 className="font-bold text-lg pt-6 ml-9 ">Details Info</h2>
                  <p className="pt-3 ml-9 leading-loose">Access detailed info from reliable sources.</p>
                </div>
  
                {/* Service Card 5 */}
                <div className="p-4 border-0 rounded-lg shadow bg-white h-80 shadow-lg w-65 ml-18">
                  <img src="img/Frame 6 services.png" alt="First Aid" className="w-30 h-35 mb-2 ml-9 pt-4" />
                  <h2 className="font-bold text-lg pt-8 ml-9 ">First Aid</h2>
                  <p className="pt-3 ml-9 leading-loose">Quick emergency help and first aid services.</p>
                </div>
  
                {/* Service Card 6 */}
                <div className="p-4 border-0 rounded-lg shadow bg-white h-80 shadow-lg w-68 ml-40">
                  <img src="img/Frame 7 services.png" alt="Health Notes" className="w-25 h-40 mb-2 ml-9 pt-4" />
                  <h2 className="font-bold text-lg pt-5 ml-9 ">Health Tracker</h2>
                  <p className="pt-3 ml-9 leading-loose">Keep track of your health notes and appointments.</p>
                </div>
              </div>
  
              {/* Image Body Wrapper */}
              <div className="relative">
                <div className="absolute top-[-420px] bottom-[30px] right-[-300px] w-[130px] h-auto z-0 opacity-25">
                  <img
                    src="img/element services.png"
                    alt="Element"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
  
              <div className="pt-6 flex justify-center mt-7 ml-44">
                <div className="w-[200px] h-[68px] rounded-full flex items-center justify-center border-2 border-blue-500 shadow-lg">
                  <button className="text-blue-500 text-lg font-semibold cursor-pointer">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
  
  
  




  )
}

export default Ourservices
