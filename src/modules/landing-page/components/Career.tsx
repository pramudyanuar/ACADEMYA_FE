import React from "react";

const CareerSection: React.FC = () => {
  return (
    <section id="career" className=" bg-blue-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          Ready to advance your career?
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Join thousands of professionals finding their dream jobs on{" "}
          <span className="font-bold text-blue-500">Jobs!.</span>
        </p>
        <button className="mt-5 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold px-8 py-3 rounded-full flex items-center gap-3 shadow-md hover:shadow-lg transition">
          GET STARTED →
        </button>
      </div>
    </section>
  );
};

export default CareerSection;
