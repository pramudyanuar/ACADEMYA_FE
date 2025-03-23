import ButtonSearchJob from "../../core/design-system/ButtonSearchJob";
import {
  LocationField,
  SearchPositionField,
  WorkTypeField,
} from "../../core/design-system/TextFieldSearchJob";
import useSearchJob from "../hooks/useSearchJob";

const JobSearchSection = () => {
  const {
    searchValue,
    setSearchValue,
    locationValue,
    setLocationValue,
    workTypeValue,
    setWorkTypeValue,
    handleSubmit,
  } = useSearchJob();

  return (
    <section id="search-job">
      <div className="bg-gray-100 min-h-screen flex justify-center items-center px-6 border-b border-gray-300">
        <div className="max-w-4xl w-full rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black text-center">FIND YOUR JOBS</h2>
          <p className="text-gray-600 text-center mb-6">FIND THE JOB THAT BEST SUITS YOU</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <SearchPositionField
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <div className="flex gap-4 w-full">
              <div className="w-1/2">
                <LocationField
                  value={locationValue}
                  onChange={(e) => setLocationValue(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <WorkTypeField
                  value={workTypeValue}
                  onChange={(e) => setWorkTypeValue(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <ButtonSearchJob type="submit">Search Job →</ButtonSearchJob>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobSearchSection;
