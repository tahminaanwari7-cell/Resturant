import{ chief, back} from "../assets/images"
import features from "./Resturant";


export default function Resturant() {
  return (
    <div>
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <header className="h-[65px] bg-[#f7f7f3] border-b border-gray-200">
        <div className="max-w-[1180px] h-full mx-auto px-5 flex items-center justify-between">

         

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#order"
              className="text-44 font-bold text-[#506a70] hover:text-[#e5aa00]"
            >
              ORDER NOW
            </a>

            <a
              href="#locations"
              className="text-44 font-bold text-[#506a70] hover:text-[#e5aa00]"
            >
              LOCATIONS
            </a>

            <a
              href="#menu"
              className="text-44 font-bold text-[#506a70] font-bold hover:text-[#e5aa00]"
            >
              MENU
            </a>
          </nav>

 {/* Logo */}
          <div className="text-[40px] font-extrabold italic tracking-[-2px] text-[#33]">
            gusto<span className="text-[#e4aa00]">!</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#catering"
              className="text-44 font-bold text-[#506a70] hover:text-[#e5aa00]"
            >
              CATERING
            </a>

            <a
              href="#rewards"
              className="text-44 font-bold text-[#506a70] hover:text-[#e5aa00]"
            >
              REWARDS
            </a>

            <a
              href="#lifestyle"
              className="text-44  text-[#506a70] hover:text-[#e5aa00] font-bold"
            >
              LIFESTYLE
            </a>
          </nav>

        {/* Mobile Menu */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-2xl text-[#333]"
>
  ☰
</button>

          
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative h-[390px] md:h-[470px] overflow-hidden">

        <img
          src={back}
          alt="Fresh food"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.62]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">

          <h1 className="text-white text-[25px] md:text-[38px] font-bold leading-tight tracking-wide">
            GLOBALLY-INSPIRED FLAVORS.
            <br />
            FRESH INGREDIENTS.
          </h1>

          <div className="flex flex-col sm:flex-row gap-2 mt-7 w-full sm:w-auto">

            <a
              href="#menu"
              className="bg-[#00627d] text-white min-w-[140px] h-[45px] flex items-center text-[13px] 
              font-bold rounded-2xl  justify-center   hover:opacity-90"
            >
              VIEW MENU
            </a>

            <a
              href="#order"
              className="bg-[#e7ad00] text-black min-w-[140px] h-[45px] 
              flex items-center justify-center font-bold  hover:opacity-90 rounded-2xl text-[13px]"
            >
              ORDER ONLINE
            </a>

          </div>
        </div>
      </section>


      {/* ================= PRONUNCIATION ================= */}
      <div className="h-[38px] bg-amber-400 flex items-center justify-center text-white  md:text-xs gap-2">
        <span>●</span>
       <p className="text-[16px] text-center"> oh — and it's pronounced guh-stow</p>
      </div>


      {/* ================= INTRO ================= */}
      <section className="py-12 md:py-16 bg-white text-center">

        <div className="max-w-[1000px] mx-auto px-5">

          <h2 className="text-[#c79b16] text-[44px] md:text-[27px] font-bold text-center mt-6">
            FRESH, HEALTHY BOWLS & WRAPS
          </h2>

          <p className="max-w-[700px] mx-auto mt-3 mb-10 text-[#212627]  text-md  ml-38">
            Inspired by the many culinary corners of the world, our menu
            showcases unique flavor combinations to satisfy your cravings,
            dietary needs, or catered events.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-1 ">

            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >

                <div className="w-[115px] h-[115px] md:w-[150px] md:h-[150px] rounded-full  
                overflow-hidden border-[3px] border-gray-100">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover "
                  />
                </div>

                <p className="mt-3 text-[#5e747a] text-[14px]">
                  {feature.title}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= AMBASSADOR ================= */}
      <section className="bg-[#e5aa00] py-7 md:py-10">

        <div className="max-w-[1180px] mx-auto px-5">

          <div className="grid md:grid-cols-[1fr_0.8fr]  items-center">

            {/* Image */}
            <div className="w-full   ">
              <img src={chief}
                alt="Gusto ambassador"
                className="w-[600px]  h-[350px] object-cover rounded-2xl"
              />
            </div>


            {/* Content */}
            <div className="text-white text-center md:text-left">

              <div className="inline-flex items-center gap-1 bg-white text-[#333] px-3 py-1 rounded text-xs font-bold">
                <span className="text-[#e2a800]">●</span>
                Gus
              </div>

              <h2 className="mt-3 text-[3px] md:text-[28px] font-black  leading-none">
                MEET OUR NEW
                <br />
                FLAVOR
                <br />
                AMBASSADOR!
              </h2>

              <p className="max-w-[390px] mx-auto md:mx-0 mt-4 mb-5  text-md">
                Like our food, Gus delivers good energy. He reminds us that
                opening your mind to globally-inspired flavors starts with
                opening your mouth!
              </p>

              <a
                href="#gus"
                className="inline-flex items-center justify-center bg-[#00617a] text-white px-6 h-[46px] rounded-2xl
                text-[12px] font-bold hover:opacity-90"
              >
                EXPLORE WITH GUS
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#243f45] text-white py-10">

        <div className="max-w-[1180px] mx-auto px-5">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="col-span-2 md:col-span-1">
              <div className="text-[32px] font-black italic">
                gusto<span className="text-[#e5aa00]">!</span>
              </div>
            </div>

            <div>
              <h3 className="text-[#e6ad0b] text-md font-bold mb-4">
                QUICK LINKS
              </h3>

              <a
                href="#menu"
                className="block text-md text-gray-300 mb-2"
              >
                Menu
              </a>

              <a
                href="#locations"
                className="block text-md text-gray-300 mb-2"
              >
                Locations
              </a>

              <a
                href="#order"
                className="block text-md text-gray-300"
              >
                Order Online
              </a>
            </div>


            <div>
              <h3 className="text-[#e6ad0b] text-md font-bold mb-4">
                ABOUT GUSTO!
              </h3>

              <a
                href="#about"
                className="block text-md text-gray-300 mb-2"
              >
                Our Story
              </a>

              <a
                href="#careers"
                className="block text-md text-gray-300 mb-2"
              >
                Careers
              </a>

              <a
                href="#contact"
                className="block text-md text-gray-300"
              >
                Contact
              </a>
            </div>


            <div>
              <h3 className="text-[#e6ad0b] text-md font-bold mb-4">
                FOLLOW US
              </h3>

              <div className="flex gap-2">

                <a href=""className="w-8 h-8 rounded-full bg-[#e5aa00] text-[#243f45] flex 
                items-center justify-center font-bold">
                  f
                </a>

                <a href="" className="w-8 h-8 rounded-full bg-[#e5aa00] text-[#243f45] 
                flex items-center justify-center font-bold">
                  ◎
                </a>

                <a href="" className="w-8 h-8 rounded-full bg-[#e5aa00] text-[#243f45] 
                flex items-center justify-center font-bold"> 𝕏</a>
                 
               

              </div>
            </div>

          </div>

        </div>
      </footer>

    </div>
     </div>
  )
}
