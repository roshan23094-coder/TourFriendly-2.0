function SearchFilters({
  district,
  setDistrict,
  category,
  setCategory,
  rating,
  setRating,
  budget,
  setBudget,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="grid md:grid-cols-5 gap-4 mb-10">

      {/* District */}

      <select
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        className="border rounded-xl p-3"
      >
        <option value="All">All Districts</option>

        <option value="Hassan">Hassan</option>

        <option value="Mysuru">Mysuru</option>

        <option value="Kodagu">Kodagu</option>

      </select>

      {/* Category */}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-xl p-3"
      >

        <option value="All">All Categories</option>

        <option value="Temple">Temple</option>

        <option value="Hill Station">Hill Station</option>

        <option value="Waterfall">Waterfall</option>

        <option value="Fort">Fort</option>

        <option value="Lake">Lake</option>

        <option value="Heritage">Heritage</option>

        <option value="Nature">Nature</option>

      </select>

      {/* Rating */}

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border rounded-xl p-3"
      >

        <option value="All">All Ratings</option>

        <option value="4">⭐ 4+</option>

        <option value="4.5">⭐ 4.5+</option>

        <option value="5">⭐ 5</option>

      </select>

      {/* Budget */}

      <select
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="border rounded-xl p-3"
      >

        <option value="All">All Budget</option>

        <option value="Free">Free</option>

        <option value="0-500">₹0 - ₹500</option>

        <option value="500-2000">₹500 - ₹2000</option>

        <option value="2000+">₹2000+</option>

      </select>

      {/* Sort */}

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border rounded-xl p-3"
      >

        <option value="None">Sort</option>

        <option value="Rating">Highest Rating</option>

        <option value="Price">Lowest Price</option>

        <option value="A-Z">A-Z</option>

      </select>

    </div>
  );
}

export default SearchFilters;