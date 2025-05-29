import EmptyImage from '../../assets/images/illustration-empty.svg';
const EmptyLinks = () => {
  return (
    <div>
      <img src={EmptyImage} alt='No links available' />
      <h2>Let's get you started</h2>
      <p>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptyLinks;
