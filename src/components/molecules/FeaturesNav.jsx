function FeaturesNav({ activeTab, setActiveTab }) {
  const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FeaturesNav;