import React from "react";

export default function Contact() {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center bg-transparent relative z-10 px-5 md:px-72 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Contact Information
      </h1>
      <div className="w-full space-y-8 mb-12">
        <div className="space-y-1 text-lg">
          <p className="font-semibold">Sukanta Das</p>
          <p>Department of Information Technology</p>
          <p>
            Indian Institute of Engineering Science and Technology, Shibpur,
            India
          </p>
          <p className="text-blue-500">sukanta@it.iiests.ac.in</p>
        </div>
        <div className="space-y-1 text-lg">
          <p className="font-semibold">Raju Hazari</p>
          <p>Department of Computer Science and Engineering</p>
          <p>National Institute of Technology Calicut, India</p>
          <p className="text-blue-500">rajuhazari@nitc.ac.in</p>
        </div>
        <div className="space-y-1 text-lg">
          <p className="font-semibold">Biplab K Sikdar</p>
          <p>Department of Computer Science and Technology</p>
          <p>
            Indian Institute of Engineering Science and Technology, Shibpur,
            India
          </p>
          <p className="text-blue-500">biplab@cs.iiests.ac.in</p>
        </div>
        <div className="space-y-1 text-lg">
          <p className="font-semibold">Cellular Automata India</p>
          <p className="text-blue-500">cellularautomataindia@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
