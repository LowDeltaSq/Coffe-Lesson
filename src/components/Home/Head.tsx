export default function Head() {
    return (
        <div className="flex justify-center items-center h-screen p-5">
      <div className="flex flex-col md:flex-row items-center bg-slate-300 rounded-3xl">
        <div className="w-full md:w-1/2 flex justify-center mb-5 md:mb-0">
          <img src="/public/photo.avif" alt="" className="max-w-full h-auto my-10 rounded-3xl px-0" />
        </div>

        <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">Name</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
           Odio ipsum deleniti deserunt facere totam voluptates, <br />
            non aperiam tempore impedit quibusdam similique est velit <br />
             quam corrupti, illum alias quae? Corporis, tempora.
            </p>
            <div className="flex">
                <a href="#" className="flex justify-center content-center text-2xl rounded-3xl bg-white p-2 mt-4 w-[30%] ">Перейти</a>
            </div>
            
        </div>
      </div>
    </div>
    )
}