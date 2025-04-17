
function SlidebarEllipse() {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap px-4 py-6 w-full">
  {/* Left Arrow */}
  <img
    src="img/left arrow.png"
    alt="left arrow"
    className="w-6 h-6 sm:w-8 sm:h-8 md:w-7 cursor-pointer"
  />

  {/* Slidebar dots */}
  <img
    src="img/Ellipse 5 slidebar.png"
    alt="dot 1"
    className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-3 md:h-3"
  />
  <img
    src="img/Ellipse 3 slidebar.png"
    alt="dot 2"
    className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-3 md:h-3"
  />
  <img
    src="img/Ellipse 4 slidebar.png"
    alt="dot 3"
    className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-3 md:h-3"
  />
  <img
    src="img/Ellipse 6 slidebar.png"
    alt="dot 4"
    className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-3 md:h-3"
  />

  {/* Right Arrow */}
  <img
    src="img/right arrow.png"
    alt="right arrow"
    className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 cursor-pointer"
  />
</div>


  )
}


export default SlidebarEllipse
