export default function Header() {
  return (
    <div className="p-5 bg-[url('/bg.png')] bg-no-repeat bg-cover  md:h-screen relative">
      <div className="flex justify-between">
        <a href="#">
          <img src="/burger.png" alt="Menu" className="w-8 h-8" />
        </a>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400 w-28 md:w-40"
          />
          <a href="#">
            <img src="/search.png" alt="Search" className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center h-full">
        <div className="md:py-0 py-10 grid gap-4 md:gap-10 w-full md:w-[50%] px-[5%] md:px-[3%] text-[#c4d702]">
          <p className="text-2xl md:text-4xl ">A Taste of Wonder:</p>
          <p className="text-4xl md:text-6xl font-bold b">Ciel’s Tea Shop</p>
          <p className="text-xl md:text-3xl">MADE LOCAL 09.28</p>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure optio
            aut quis! Autem aperiam hic rerum accusantium fugit corrupti nihil.
            Nostrum, possimus officia. Minima natus excepturi voluptatibus modi
            ipsam repellat veniam, ab officiis tempore aliquam ducimus pariatur
            molestiae, ut tenetur asperiores error vitae quibusdam!
          </p>
          <a
            href="#"
            className="font-bold rounded-full bg-[#c4d702] w-full md:w-36 text-white flex justify-center py-3"
          >
            LEARN MORE
          </a>
        </div>

        <div className=" px-[5%] md:px-[12%]">
          <img
            src="/header.png"
            alt="Tea Shop"
            className="md:w-full md:h-full object-cover w-[100%] py-10 "
          />
        </div>
      </div>
    </div>
  );
}
