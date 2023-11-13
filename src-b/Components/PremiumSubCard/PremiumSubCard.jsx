import { Link } from "react-router-dom";

const PremiumSubCard = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full p-4 sm:p-6 bg-white border border-gray-200 rounded-md shadow-sm">
        <h5 className="mb-2 sm:mb-3 text-2xl text-center font-bold tracking-tight text-gray-900 ">
          Become a Premium subscriber
        </h5>

        <p className="mb-3 sm:mb-4 text-center font-normal text-gray-700 ">
          You have 3 trial credits at your disposal.
        </p>
        <Link to={""}>
          <button className="bg-secondary py-2 w-full">Upgrade</button>
        </Link>
      </div>
    </div>
  );
};

export default PremiumSubCard;
