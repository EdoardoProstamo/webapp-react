const Stars = ({ vote }) => {
    const numberMaxStars = 5;

    return (
        <div className="stars d-flex">
            {[...Array(numberMaxStars)].map((_, index) => {
                const className = index < Math.floor(vote)
                    ? 'fa-solid fa-star text-warning'  // piena
                    : (index < vote)
                        ? 'fa-solid fa-star-half-stroke text-warning' // mezza
                        : 'fa-regular fa-star text-warning'; // vuota
                return <i key={index} className={className}></i>;
            })}
        </div>
    );
};

export default Stars;