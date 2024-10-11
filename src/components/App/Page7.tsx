export default function Page7() {
  return (
    <div className="gap-10 bg-[url('/bg2.png')] bg-cover flex flex-col justify-center items-center h-[50vh] py-10">
      <div className="text-center mb-5 ">
        <p className="b text-4xl md:text-6xl text-[#c4d702] font-bold">
          Join the Newsletter
        </p>
      </div>
      <div className="flex justify-center mb-5">
        <input
          type="mail"
          placeholder="Your E-mail Address"
          className="border-2 border-[#c4d702] bg-transparent w-full md:w-80 px-5 py-2 text-2xl placeholder:text-white text-center focus:outline-none"
        />
      </div>

      <div className="flex justify-center">
        <a
          href="#"
          className="font-bold rounded-full bg-[#c4d702] w-full md:w-36 text-white py-3 text-center"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
}
