import { useEffect, useState } from "react";
import CategoriesDisplay from "./CategoriesDisplay";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div className="w-full h-full">
            <h1 className="text-xl font-bold font-serif text-gray-700 text-center">All Categories</h1>
            <ul>
                {categories.map(category => <CategoriesDisplay key={category.id} category={category}></CategoriesDisplay>)}
            </ul>
        </div>
    );
};

export default LeftNav;