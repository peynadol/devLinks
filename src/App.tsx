import { useState } from 'react';
import Header from './components/Header';
import LinksSection from './features/links/LinksSection';
import PreviewSection from './features/preview/PreviewSection';
import ProfileSection from './features/profile/ProfileSection';

const App = () => {
  const [activeTab, setActiveTab] = useState('links');
  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'links' && <LinksSection />}
        {activeTab === 'preview' && <PreviewSection />}
        {activeTab === 'profile' && <ProfileSection />}
      </main>
    </div>
  );
};

export default App;
