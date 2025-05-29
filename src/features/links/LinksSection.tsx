import LinkCard from '../../components/linkCard';
import EmptyLinks from './EmptyLinks';
import { nanoid } from 'nanoid';
import { useState } from 'react';

//TODO: save button needs to set links in app state

const LinksSection = ({ links, setLinks }) => {
  const [formData, setFormData] = useState({
    platform: '',
    url: '',
  });

  const handleRemoveLink = (id: string) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  const handleAddLink = () => {
    const { platform, url } = formData;
    if (!platform || !url) {
      alert('Please fill in both platform and URL');
      return;
    }

    const newLink = {
      id: nanoid(),
      platform,
      url,
    };

    setLinks((prevLinks) => [...prevLinks, newLink]);
    setFormData({ platform: '', url: '' });
    console.log('Link added:', newLink);
  };

  return (
    <main>
      <h1>Customise your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      {links.length === 0 ? (
        <EmptyLinks />
      ) : (
        <div className='space-y-4 mt-4'>
          {links.map((link, index) => (
            <LinkCard
              key={link.id}
              formData={link}
              readOnly
              index={index + 1}
              onRemove={() => handleRemoveLink(link.id)}
            />
          ))}
        </div>
      )}

      <button className='mt-8'>Add a new link</button>
      <LinkCard
        formData={formData}
        onChange={(field, value) =>
          setFormData((prev) => ({ ...prev, [field]: value }))
        }
        index={links.length + 1}
      />

      <button className='btn btn-primary mt-4' onClick={handleAddLink}>
        Save changes
      </button>
    </main>
  );
};

export default LinksSection;
