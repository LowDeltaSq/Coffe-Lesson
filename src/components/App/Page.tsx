export default function Page() {
  return (
    <div className="p-5 bg-[url('/bg2.png')] bg-no-repeat bg-cover md:h-screen relative">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center h-full">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-[5%] md:px-[12%] w-full md:w-auto justify-center md:justify-center">
          <img
            src="/p1.png"
            alt=""
            className="w-64  md:w-auto md:h-auto object-cover"
          />
          <img
            src="/p2.png"
            alt=""
            className="w-64  md:w-auto md:h-auto object-cover"
          />
        </div>

        <div className="grid gap-4 md:gap-10 w-full md:w-[50%] px-[5%] md:px-[3%] text-[#c4d702]">
          <p className="b text-3xl md:text-6xl font-bold text-center md:text-left">
            What We Do
          </p>
          <p className="text-xs md:text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            blanditiis et fuga, amet quae eligendi. Ipsum laborum provident illo
            reiciendis atque reprehenderit sint. Voluptate ipsam consequatur
            debitis repudiandae qui quidem!
          </p>
          <a
            href="#"
            className="md:my-0 my-10 font-bold rounded-full bg-[#c4d702] w-full md:w-36 text-white flex justify-center py-3"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}
