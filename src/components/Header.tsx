const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ['links', 'profile', 'preview'];
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? 'active' : ''}>
              <a onClick={() => setActiveTab(tab)}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
