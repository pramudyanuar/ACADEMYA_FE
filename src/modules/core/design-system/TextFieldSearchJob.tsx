"use client";

import React from "react";
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react"; //nambah 'npm install lucide-react' buat icon

// Icon type for the TextField
type IconType = "search" | "location" | "workType";

// Props interface with added icon and placeholder support
interface TextFieldSearchJobProps {
  label?: string;
  type?: "text" | "select";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  placeholder?: string;
  icon?: IconType;
  options?: { value: string; label: string }[];
  className?: string;
}

// Styling
const baseInputClasses = `w-full py-4 pl-12 pr-4 bg-white text-[#112D4E] rounded-full text-lg 
  border border-[#112D4E] focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all`;

// Icon from lucide-react
const iconMap = {
  search: <Search className="h-5 w-5 text-[#112D4E]" />,
  location: <MapPin className="h-5 w-5 text-[#112D4E]" />,
  workType: <Briefcase className="h-5 w-5 text-[#112D4E]" />,
};

export const TextFieldSearchJob: React.FC<TextFieldSearchJobProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  options,
  className = "",
}) => {
  return (
    <div className="relative">
      {/* Label */}
      {label && (
        <label className="block text-[#112D4E] dark:text-gray-300 mb-1">
          {label}
        </label>
      )}

      {/* Icon container */}
      {icon && (
        <div className="absolute inset-y-0 left-4 flex items-center">
          {iconMap[icon]}
        </div>
      )}

      {/* Input or Select Field */}
      {type === "select" ? (
        <div className="relative">
          <select
            className={`${baseInputClasses} appearance-none pr-10 ${className}`}
            value={value}
            onChange={onChange}
            required
            aria-label={label || placeholder}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Chevron Icon */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <ChevronDown className="h-5 w-5 text-[#112D4E]" />
          </div>
        </div>
      ) : (
        <input
          type={type}
          className={`${baseInputClasses} ${className}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          aria-label={label || placeholder}
        />
      )}
    </div>
  );
};

// Specialized components for each field type
export const SearchPositionField: React.FC<
  Omit<TextFieldSearchJobProps, "icon" | "placeholder" | "type">
> = (props) => (
  <TextFieldSearchJob
    {...props}
    icon="search"
    placeholder="Search Position"
    type="text"
    className="placeholder-[#112D4E]"
  />
);

export const LocationField: React.FC<
  Omit<TextFieldSearchJobProps, "icon" | "placeholder" | "type">
> = (props) => (
  <TextFieldSearchJob
    {...props}
    icon="location"
    placeholder="Type Location"
    type="text"
    className="placeholder-[#112D4E]"
  />
);

export const WorkTypeField: React.FC<
  Omit<TextFieldSearchJobProps, "icon" | "placeholder" | "type">
> = (props) => (
  <TextFieldSearchJob
    {...props}
    icon="workType"
    placeholder="Work Type"
    type="select"
    className="placeholder-[#112D4E]"
    options={[
      { value: "full-time", label: "Full Time" },
      { value: "part-time", label: "Part Time" },
      { value: "contract", label: "Contract" },
      { value: "freelance", label: "Freelance" },
      { value: "internship", label: "Internship" },
    ]}
  />
);

export default TextFieldSearchJob;

//cara pakai
// import { useState } from "react";
// import {
//   SearchPositionField,
//   LocationField,
//   WorkTypeField,
// } from alamat file ini

//misal lempar ke app
//function App() {
// State for form values
//   const [searchValue, setSearchValue] = useState("");
//   const [locationValue, setLocationValue] = useState("");
//   const [workTypeValue, setWorkTypeValue] = useState("");

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({
//       search: searchValue,
//       location: locationValue,
//       workType: workTypeValue,
//     });
//     // Add your search logic here
//   };

//   return (
//     <div className="min-h-screen flex items-start justify-center pt-10">
//       <div className="w-full max-w-4xl">
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
//           {/* Search Position Field */}
//           <SearchPositionField
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//           />

//           {/* Location and Work Type in a row */}
//           <div className="flex gap-4 w-full">
//             <div className="w-1/2">
//               <LocationField
//                 value={locationValue}
//                 onChange={(e) => setLocationValue(e.target.value)}
//               />
//             </div>
//             <div className="w-1/2">
//               <WorkTypeField
//                 value={workTypeValue}
//                 onChange={(e) => setWorkTypeValue(e.target.value)}
//               />
//             </div>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }
