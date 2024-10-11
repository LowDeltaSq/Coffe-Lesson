export default function page4() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover p-6 md:p-20">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="b text-3xl md:text-6xl mb-12 md:mb-24 font-bold text-[#c4d702]">
            Our Products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 gap-x-10 md:gap-x-96 justify-items-center">
          <div className="grid gap-3 md:gap-5 text-[#c4d702] max-w-[300px] w-full md:max-w-[350px]">
            <img src="/pag1.png" alt="Black Tea" className="w-full" />
            <p className="text-xl md:text-5xl b">BLACK TEA</p>
            <p className="text-xs md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              dolores necessitatibus dicta alias incidunt inventore velit.
            </p>
          </div>
          <div className="grid gap-3 md:gap-5 text-[#c4d702] max-w-[300px] w-full md:max-w-[350px]">
            <img src="/pag2.png" alt="Oolong Tea" className="w-full" />
            <p className="text-xl md:text-5xl b">OOLONG TEA</p>
            <p className="text-xs md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              dolores necessitatibus dicta alias incidunt inventore velit.
            </p>
          </div>
          <div className="grid gap-3 md:gap-5 text-[#c4d702] max-w-[300px] w-full md:max-w-[350px]">
            <img src="/pag3.png" alt="Green Tea" className="w-full" />
            <p className="text-xl md:text-5xl b">GREEN TEA</p>
            <p className="text-xs md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              dolores necessitatibus dicta alias incidunt inventore velit.
            </p>
          </div>
          <div className="grid gap-3 md:gap-5 text-[#c4d702] max-w-[300px] w-full md:max-w-[350px]">
            <img src="/pag4.png" alt="Herbal Infusions" className="w-full" />
            <p className="text-xl md:text-5xl b">HERBAL INFUSIONS</p>
            <p className="text-xs md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              dolores necessitatibus dicta alias incidunt inventore velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
