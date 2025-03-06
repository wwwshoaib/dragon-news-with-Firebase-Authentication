import { useLoaderData } from "react-router";
import NewsCard from "../../components/NewsCard/NewsCard";



const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div>
            <h1 className="text-xl font-semibold text-gray-500 mb-3">Dragon News Home</h1>
            <p className="text-gray-500 text-sm">
                {news.length} news were found on this category
            </p>
            {/* new cards */}
            <div>
              {
                  news.map((singleNews) => <NewsCard key ={singleNews._id} news ={singleNews} ></NewsCard>)
              }
            </div>
        </div>
    );
};

export default CategoryNews;