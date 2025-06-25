const Stars = ({ vote }) => {

    const numberMaxStars = 5.00;

    return ([...Array(numberMaxStars)].map((_, index) => <i key={index} className={`fa-star ${index < vote ? 'fa-solid' : 'fa-regular'} `}></i>));

};

export default Stars;