function MovieCard({ data }) {
    return (
        <>
            {data &&
                data.Search.map((item, index) => (
                    <div key={index} className="movie">
                        <div>
                            <p>{item.Year}</p>
                        </div>
                        <img
                            src={
                                item.Poster !== 'N/A'
                                    ? item.Poster
                                    : 'https://via.placeholder.com/400'
                            }
                            className="movie"
                            alt={item.Title}
                        />
                        <div>
                            <span>{item.Type}</span>
                            <h3>{item.Title}</h3>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default MovieCard;
