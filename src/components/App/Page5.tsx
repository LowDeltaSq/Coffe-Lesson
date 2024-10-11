export default function Page5() {
  return (
    <div className="bg-[url(/bg2.png)] bg-cover flex justify-center items-center px-5 md:px-20 py-10 md:py-20">
      <div className="flex items-center justify-start pr-10 md:pr-96">
        <p className="b text-2xl md:text-5xl text-[#c4d702] transform -rotate-90">
          NEW ARRIVALS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <div className="text-center grid gap-3 md:gap-5 text-[#c4d702] max-w-[300px] w-full">
          <img src="/page1.png" alt="Peppermint Tea" className="w-full" />
          <p className="text-lg md:text-4xl b">PEPPERMINT TEA</p>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
          </p>
        </div>
        <div className="text-center grid gap-3 md:gap-5 text-[#c4d702] max-w-[300px] w-full">
          <img src="/page2.png" alt="Green Tea" className="w-full" />
          <p className="text-lg md:text-4xl b">GREEN TEA</p>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
          </p>
        </div>
      </div>
    </div>
  );
}
