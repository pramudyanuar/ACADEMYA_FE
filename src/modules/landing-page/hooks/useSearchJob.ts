import { useState } from "react";

const useSearchJob = () => {
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [workTypeValue, setWorkTypeValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      search: searchValue,
      location: locationValue,
      workType: workTypeValue,
    });
    // Add your search logic here
  };

  return {
    searchValue,
    setSearchValue,
    locationValue,
    setLocationValue,
    workTypeValue,
    setWorkTypeValue,
    handleSubmit,
  };
};

export default useSearchJob;
