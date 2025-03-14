import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const JobSearchSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 flex justify-center border-b border-gray-300">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-black">FIND YOUR JOBS</h2>
        <p className="text-gray-600 mb-6">FIND THE JOB THAT BEST SUITS YOU</p>

        <div className="flex items-center gap-4">
          <IoArrowForward className="text-blue-500 text-2xl" />
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search Position"
              className="border rounded-full px-4 py-2 w-full"
            />
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="relative w-full md:w-1/2">
                <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Type Location"
                  className="border rounded-full pl-10 py-2 w-full"
                />
              </div>
              <div className="relative w-full md:w-1/2">
                <FaBriefcase className="absolute left-3 top-3 text-gray-500" />
                <select className="border rounded-full pl-10 py-2 w-full">
                  <option>Work Type</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Remote</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="bg-gradient-to-r from-blue-500 to-blue-900 text-white font-bold px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
            SEARCH JOB <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchSection;
