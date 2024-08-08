interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
        <div className="flex items-center py-2">
            {[...Array(fullStars)].map((_, index) => (
                <svg
                    key={`full-${index}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="text-yellow-500"
                >
                    <path d="M12 17.75l-6.16 3.7 1.64-7.1L2 8.92l7.22-.62L12 2l2.78 6.3 7.22.62-5.48 5.38 1.64 7.1L12 17.75z" />
                </svg>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <svg
                    key={`empty-${index}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                    className="text-gray-300"
                >
                    <path d="M12 17.75l-6.16 3.7 1.64-7.1L2 8.92l7.22-.62L12 2l2.78 6.3 7.22.62-5.48 5.38 1.64 7.1L12 17.75z" />
                </svg>
            ))}
        </div>
    );
};

export default StarRating;
