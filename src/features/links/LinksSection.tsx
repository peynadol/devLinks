import LinkCard from '../../components/linkCard';
import EmptyLinks from './EmptyLinks';

const LinksSection = ({ links, setLinks }) => {
  console.log(links.length);
  return (
    <main>
      <h1>Customise your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button className='btn'>+ Add new link</button>

      {/* {links.length === 0 ? <EmptyLinks /> : <p>links</p>} */}

      <LinkCard />
    </main>
  );
};

export default LinksSection;
