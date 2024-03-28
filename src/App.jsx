import { useState, useEffect } from 'react';
import { API_KEY } from '../public/config';
import MovieCard from './MovieCard';
import './App.css';

function App() {
    const [data, setData] = useState(null);
    const [title, setTitle] = useState('');

    function getTitle(event) {
        setTitle(event.target.value);
    }

    useEffect(() => {});

    async function printApi() {
        try {
            const API_URL = `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`;
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="app">
                <h1>MovieMania</h1>
                <div className="search">
                    <input
                        placeholder="search a movie"
                        type="text"
                        value={title}
                        onChange={getTitle}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') printApi();
                        }}
                    />
                    <img
                        src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                        alt="search"
                        onClick={printApi}
                    />
                </div>
                {data?.length > 0 ? (
                    <div className="container">
                        {data.Search.map((movieData) => (
                            <MovieCard
                                key={movieData.imdbID}
                                data={movieData}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies were found</h2>
                    </div>
                )}
                <div className="container">
                    <MovieCard data={data} />
                </div>
            </div>
        </>
    );
}

export default App;
