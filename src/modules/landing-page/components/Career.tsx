import React from "react";
import ButtonSearchJob from "../../core/design-system/ButtonSearchJob";

const CareerSection: React.FC = () => {
  return (
    <section className=" bg-blue-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
          Ready to advance your career?
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Join thousands of professionals finding their dream jobs on{" "}
          <span className="font-bold text-blue-500">Jobs!.</span>
        </p>
        <div className="mt-7 flex justify-center">
          <ButtonSearchJob type="submit">GET STARTED →</ButtonSearchJob>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
