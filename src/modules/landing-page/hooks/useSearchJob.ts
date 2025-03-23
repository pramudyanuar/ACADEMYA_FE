import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationRoutes from "../../../routes/NavigationRoutes";
import toast from "react-hot-toast";

const useSearchJob = () => {
  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [workTypeValue, setWorkTypeValue] = useState("");
  const navigate = useNavigate(); // ⬅️ Tambahkan useNavigate

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      search: searchValue,
      location: locationValue,
      workType: workTypeValue,
    });

    // 🔽 Navigasi ke halaman hasil pencarian
    toast.success("Bergabung dengan kami untuk mendapatkan pekerjaan terbaik!");
    navigate(
      `${NavigationRoutes.LOGIN}`
    );
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
