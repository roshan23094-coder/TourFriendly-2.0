import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!keyword.trim()) return;

    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-3"
    >
      <input
        type="text"
        placeholder="Search destinations..."
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
        className="border p-4 rounded-xl w-full"
      />

      <button
        className="bg-blue-700 text-white px-8 rounded-xl"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;