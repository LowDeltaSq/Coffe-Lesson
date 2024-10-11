export default function Page2() {
  return (
    <div className="p-5 bg-[url('/bg.png')] bg-no-repeat bg-cover md:h-screen relative">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center h-full">
        <div className="grid gap-4 md:gap-10 w-full md:w-[50%] px-[5%] md:px-[3%] text-[#c4d702]">
          <p className="b text-4xl md:text-6xl font-bold">
            New Arrival <br />
            Relaxing Tea
          </p>
          <div className="grid gap-64">
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ipsa
              cum distinctio corporis maxime quia rem, dolorum assumenda aperiam
              accusantium nostrum quisquam ducimus soluta. Corrupti voluptas
              dignissimos veniam cupiditate voluptatum.
            </p>
            <div className="grid gap-3 text-center">
              <p className="inline-block">Lorem ipsum dolor sit amet.</p>
              <hr className="w-[calc(30%)] mx-auto border-t-2 border-[#c4d702]" />
            </div>
          </div>
        </div>

        <div className="px-0 md:px-0 ">
          <img
            src="/pg.png"
            alt=""
            className="md:w-full md:h-full object-cover w-[100%] py-10"
          />
        </div>
      </div>
    </div>
  );
}
