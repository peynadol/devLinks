import { useState } from 'react';
import Header from './components/Header';
import LinksSection from './features/links/LinksSection';
import PreviewSection from './features/preview/PreviewSection';
import ProfileSection from './features/profile/ProfileSection';

type Link = {
  id: string;
  title: string;
  url: string;
  icon?: string;
  color?: string;
};

const App = () => {
  const [activeTab, setActiveTab] = useState('links');
  const [links, setLinks] = useState<Link[]>([]);
  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'links' && (
          <LinksSection links={links} setLinks={setLinks} />
        )}
        {activeTab === 'preview' && <PreviewSection />}
        {activeTab === 'profile' && <ProfileSection />}
      </main>
    </div>
  );
};

export default App;
