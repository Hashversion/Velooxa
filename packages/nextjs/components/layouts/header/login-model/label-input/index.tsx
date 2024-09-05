type LabelInputT = {
  type: string;
  placeholder: string;
};
const LabelInput = ({ type, placeholder }: LabelInputT) => {
  return (
    <label htmlFor="">
      <input type={type} placeholder={placeholder} />
    </label>
  );
};

export default LabelInput;
