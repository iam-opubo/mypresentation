

function Footer() {
  return ( 
    <div className="relative w-360 h-auto md:ml-35 md:mr-25  font-mulish mt-10 md:mt-50 z-10" style={{ background: 'linear-gradient(to right, #67C3F3, #5A98F2)' }}>

            {/* Inside background (in front) */}
      <div className="absolute z-20 top-5 left-5 md:top-10 md:left-10 mt-30">
          <img src="img/element inside Footer.png" alt="inside Footer" className="w- md:w-35 h-auto" />
      </div>

              {/* Behind background */}
        <div className="absolute z-0 top-0 right-0 mt-[-40px] md:mt-[-60px] md:mr-[30px]">
          <img src="img/element Footer.png" alt="outside element" className="w-30" />
        </div>

                  {/* Footer content centered */}
        <div className="relative z-30 flex items-center justify-center px-4 sm:px-8 py-10 ml-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white text-sm w-full max-w-7xl">

                  {/* Logo + description */}
          <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-white text-blue-500 w-10 h-10 flex items-center justify-center text-lg font-bold">
                  T
                </div>
                <h1 className="text-lg">Trafalgar</h1>
              </div>

                <div className="text-xs md:text-sm leading-relaxed font-mulish font-light">
                  <h1>
                  Trafalgar provides progressive, and affordable<br />
                  healthcare, accessible on mobile and online<br />
                  for everyone
                  </h1>
                  <p className="mt-5">©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>
            </div>

                  {/* Company */}
                <div className="md:ml-20">
                  <h1 className="font-bold mb-2 text-base">Company</h1>
                  <ul className="space-y-1 text-xs md:text-sm font-mulish font-light mt-5 leading-loose">
                    <li>About</li>
                    <li>Testimonials</li>
                    <li>Find a doctor</li>
                    <li>Apps</li>
                  </ul>
                </div>


                  {/* Region */}
                  <div className="md:ml-10">
                    <h1 className="font-bold mb-2 text-base">Region</h1>
                      <ul className="space-y-1 text-xs md:text-sm font-mulish font-light mt-5 leading-loose">
                        <li>Indonesia</li>
                        <li>Singapore</li>
                        <li>Hong Kong</li>
                        <li>Canada</li>
                      </ul>
                  </div>


                  {/* Help */}
                  <div>
                    <h1 className="font-bold mb-2 text-base">Help</h1>
                    <ul className="space-y-1 text-xs md:text-sm font-mulish font-light mt-5 leading-loose">
                      <li>Help Center</li>
                      <li>Contact Support</li>
                      <li>Instructions</li>
                      <li>How it works</li>
                    </ul>
                  </div>
                </div>
            </div>
      </div>

  
  


  )
}

export default Footer

    {/* add mobile responsiveness in the first div dont forget */}
