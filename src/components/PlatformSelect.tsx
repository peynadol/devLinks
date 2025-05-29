import { platformOptions } from '../consts/consts';
//TODO figure out how to also render icons in the select options
// maybe look at daisyui dropdown component

const PlatformSelect = ({ value, onChange }) => {
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend'>Platform</legend>
      <select
        defaultValue=''
        className='select'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value=''>
          Select a platform
        </option>
        {platformOptions.map((option) => (
          <option key={option.name} value={option.name}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default PlatformSelect;
