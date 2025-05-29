import PlatformSelect from './PlatformSelect';
import LinkInput from './LinkInput';

const LinkCard = ({ formData, onChange }) => {
  return (
    <section>
      <h2>Link 1</h2> {/* dynamically count the link*/}
      <button>Remove</button> {/* push to far side. removes card from dom */}
      <PlatformSelect
        value={formData.platform}
        onChange={(val) => onChange('platform', val)}
      />
      <LinkInput
        value={formData.url}
        onChange={(val) => onChange('url', val)}
      />
    </section>
  );
};

export default LinkCard;
