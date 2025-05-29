const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ['links', 'preview', 'profile'];
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            fontWeight: activeTab === tab ? 'bold' : 'normal',
            margin: '0 10px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Header;
