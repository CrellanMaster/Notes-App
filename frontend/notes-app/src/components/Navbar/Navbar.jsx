import ProfileInfo from "@components/cards/ProfileInfo";
import Searchbar from "@components/searchbar/SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <Searchbar />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
