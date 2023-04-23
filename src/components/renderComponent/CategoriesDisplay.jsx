import { Link } from "react-router-dom";

const CategoriesDisplay = ({category}) => {
    return (
        <Link to={`/category/${category.id}`}>
             <li  className="bg-gray-200 font-semibold font-mono mt-1 px-3 py-2 rounded hover:scale-95 origin-right duration-200">
            {category.name}
            </li>
           </Link>
    );
};

export default CategoriesDisplay;