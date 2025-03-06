import { useEffect, useState } from "react";
import { NavLink } from "react-router";

/**
 * 
 *   {
        "category_id": "01",
        "category_name": "Breaking News"
      },
 */


const LeftNavbar = () => {
    //load categories
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category
            ))
    }, [])
    return (
        <div>
            <h2 className="font-semibold text-[#444444 text-center">All Categories ({categories.length})</h2>

            {/* all categories displayed */}
            <div className="flex flex-col gap-2 mt-3">
                {
                    categories.map(category => <NavLink
                    to = {`/category/${category.category_id}`}
                        className="btn bg-base-200"
                        key={category.category_id}>{category.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;