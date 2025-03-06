import { useLoaderData } from "react-router";



const CategoryNews = () => {
    const { data } = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>{data.length} news were found in this category news</h1>
        </div>
    );
};

export default CategoryNews;