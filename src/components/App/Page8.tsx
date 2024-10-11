export default function Page8() {
  return (
    <div className="bg-[url('/bg.png')] bg-cover p-5 md:p-10">
      <div className="pl-32 text-[#c4d702] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
        <div className="grid gap-2">
          <p className="text-2xl md:text-4xl m">Our Services</p>
          <p className="text-xl md:text-xl">
            <a href="#">What’s New</a> <br />
            <a href="#">How to Order</a> <br />
            <a href="#">Payment Method</a> <br />
            <a href="#">Order Status</a> <br />
          </p>
        </div>
        <div className="grid gap-2">
          <p className="text-2xl md:text-4xl m">Our Team</p>
          <p className="text-xl md:text-xl">
            <a href="#">Our Local Farms</a> <br />
            <a href="#">Craftsmanship</a> <br />
            <a href="#">Our Resources</a> <br />
            <a href="#">Sustainability</a> <br />
          </p>
        </div>
        <div className="grid gap-2">
          <p className="text-2xl md:text-4xl m">About Us</p>
          <p className="text-xl md:text-xl">
            <a href="#">Who We Are</a> <br />
            <a href="#">What We Do</a> <br />
            <a href="#">Careers</a> <br />
            <a href="#">Sponsors</a> <br />
          </p>
        </div>
        <div className="grid gap-2">
          <p className="text-2xl md:text-4xl m">Legal</p>
          <p className="text-xl md:text-xl">
            <a href="#">Privacy Policy</a> <br />
            <a href="#">Terms & Conditions</a> <br />
          </p>
        </div>
      </div>
      <div className="pt-10 md:pt-20">
        <p className="text-white text-center">
          Copyright 2021 Ciel’s Tea Shop All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
