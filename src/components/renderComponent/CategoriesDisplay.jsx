
const CategoriesDisplay = ({category}) => {
    return (
        <li className="bg-gray-200 font-semibold font-mono mt-1 px-3 py-2 rounded hover:scale-95 origin-right duration-200">
            {category.name}
        </li>
    );
};

export default CategoriesDisplay;