import LinkCard from '../../components/linkCard';
import EmptyLinks from './EmptyLinks';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const LinksSection = ({ links, setLinks }) => {
  const [formData, setFormData] = useState({
    platform: '',
    url: '',
  });

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

      <button className='btn' onClick={handleAddLink}>
        + Add new link
      </button>

      {links.length === 0 ? (
        <EmptyLinks />
      ) : (
        <ul className='mt-4'>
          {links.map((link) => (
            <li key={link.id}>
              {link.platform}: <a href={link.url}>{link.url}</a>
            </li>
          ))}
        </ul>
      )}

      <LinkCard
        formData={formData}
        onChange={(field, value) =>
          setFormData((prev) => ({ ...prev, [field]: value }))
        }
      />

      <button className='btn btn-secondary mt-4' onClick={handleAddLink}>
        Save changes
      </button>
    </main>
  );
};

export default LinksSection;
