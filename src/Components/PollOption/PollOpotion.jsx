const PollOption = ({ num, option, className, innerHtml }) => {
  return (
    <div
      className={`py-2 w-[48%] border text-center rounded-full hover:bg-secondary hover:border-transparent ${className}`}
    >
      {/* {num}
      {"."}
      {option} */}
      {innerHtml}
    </div>
  );
};

export default PollOption;
