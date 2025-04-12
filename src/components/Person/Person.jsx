export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerInfo;

  if (partnerName && isMarried) {
    partnerInfo =
      // eslint-disable-next-line no-nested-ternary
      sex === 'm'
        ? `My wife is ${partnerName}`
        : sex === 'f'
          ? `My husband is ${partnerName}`
          : null;
  } else {
    partnerInfo = 'I am not married';
  }

  return (
    <>
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : null}</p>
      <p className="Person__partner">{partnerInfo}</p>
    </>
  );
};
