import PlatformSelect from './PlatformSelect';

const LinkCard = () => {
  return (
    <section>
      <h2>Link 1</h2> {/* dynamic count the link*/}
      <button>Remove</button> {/* push to far side. removes card from dom */}
      {/* SELECT SECTION */}
      <PlatformSelect />
    </section>
  );
};

export default LinkCard;
