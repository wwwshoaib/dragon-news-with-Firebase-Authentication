import PropTypes from "prop-types";
import { FaRegBookmark, FaRegEye, FaStar, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const handleShare = () => {
    navigator.share({
      title: news.title,
      text: news.details,
      url: window.location.href,
    }).catch((error) => console.log("Error sharing", error));
  };

  return (
    <div className="card bg-base-100 shadow-xl p-4 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="font-bold text-sm">{news.author.name}</h2>
          <p className="text-xs text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <FaRegBookmark className="text-gray-600 cursor-pointer" />
          <FaShareAlt className="text-gray-600 cursor-pointer" onClick={handleShare} />
        </div>
      </div>
      <h2 className="font-bold text-lg mb-2">{news.title}</h2>
      <img
        src={news.image_url} 
        alt={news.title}
        className="rounded-lg w-full h-48 object-cover mb-3"
      />
      <p className="text-sm text-gray-600">
        {news.details.length > 100
          ? `${news.details.substring(0, 100)}...`
          : news.details}
      </p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center text-orange-500">
          <FaStar /> <span className="ml-1 font-semibold">{news.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaRegEye /> <span className="ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      number: PropTypes.number.isRequired,
    }).isRequired,
    total_view: PropTypes.number.isRequired,
  }).isRequired,
};

export default NewsCard;
