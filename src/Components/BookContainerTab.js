import React from "react";
// tab bar items defined
const ALL = "all";
const FEATURED = "featured";

const BookContainerTab = ({ setSelectedTab, getSelectedTab }) => {
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${getSelectedTab === ALL && "active-filter"}`}
          id="lws-filterAll"
          onClick={() => setSelectedTab(ALL)}
        >
          All
        </button>
        <button
          className={`filter-btn ${
            getSelectedTab === FEATURED && "active-filter"
          }`}
          id="lws-filterFeatured"
          onClick={() => setSelectedTab(FEATURED)}
        >
          Featured
        </button>
      </div>
    </div>
  );
};
export default BookContainerTab;
