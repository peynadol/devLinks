import PlatformSelect from './PlatformSelect';
import LinkInput from './LinkInput';

const LinkCard = ({ formData, onChange, index, onRemove }) => {
  return (
    <section>
      <h2>{`Link ${index}`}</h2> {/* dynamically count the link*/}
      <button onClick={onRemove}>Remove</button>{' '}
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
