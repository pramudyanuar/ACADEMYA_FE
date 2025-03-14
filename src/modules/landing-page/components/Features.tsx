import { FaLink } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";


const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Connect */}
          <div className="flex flex-col items-center">
            <FaLink className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Connect</h3>
            <p className="text-gray-600 mt-2">
              StaffMerge's mission is to CONNECT Employers with Job Seekers in
              an effective and efficient platform, making it easier for both.
            </p>
          </div>

          {/* Merge */}
          <div className="flex flex-col items-center">
            <FaRegWindowRestore className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Merge</h3>
            <p className="text-gray-600 mt-2">
              Using Resumes, Video Introductions, Video Interviews, and Direct
              Messages, StaffMerge's platform goal is to MERGE Employers and Job
              Seekers.
            </p>
          </div>

          {/* Work */}
          <div className="flex flex-col items-center">
            <FaBriefcase className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Work</h3>
            <p className="text-gray-600 mt-2">
              After Employers and Job Seekers have connected and merged, now it
              is time to WORK, mutually benefiting both.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
