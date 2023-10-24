import { Link } from "react-router-dom";

const PostCategoryMenu = () => {
  return (
    <div className="px-3">
      <h2 className="text-xl font-semibold mb-3">Our Category</h2>
      <div>
        <ul className="flex flex-col gap-2">
          <Link>
            <li className="w-full py-1 border rounded pl-4 text-lg bg-secondary">
              Sports
            </li>
          </Link>
          <Link>
            <li className="w-full py-1 border rounded pl-4 text-lg hover:bg-secondary">
              Tech
            </li>
          </Link>
          <Link>
            <li className="w-full py-1 border rounded pl-4 text-lg hover:bg-secondary">
              Fashion
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default PostCategoryMenu;
