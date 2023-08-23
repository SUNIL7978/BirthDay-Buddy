const Person = ({ image, name, Dob }) => {
  return (
    <section className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{Dob}</p>
      </div>
    </section>
  );
};

export default Person;
