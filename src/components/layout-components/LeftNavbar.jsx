import { useEffect, useState } from "react";

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
            <div className="flex flex-col gap-2 mt-3">
                {
                    categories.map(category => <button
                        className="btn bg-base-200"
                        key={category.category_id}>{category.category_name}
                    </button>)
                }
            </div>


        </div>
    );
};

export default LeftNavbar;