import MovieItem from "./components/MovieItem/MovieItem.tsx";
import {useState} from "react";
import {MovieType} from "../../types.ts";

const MoviesList = () => {

    const [movieNames, setMoviesNames] = useState<MovieType[]>([]);
    const [movieName, setMovieName] = useState<MovieType>({
        id: '',
        name: '',
    });

    const onclick = (id: string) => {
        const filteredMovies = movieNames.filter(item => item.id !== id);
        setMoviesNames(filteredMovies);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setMovieName({
            ...movieName,
            name: event.target.value,
            id: Math.random().toString(),
        });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setMoviesNames([...movieNames, movieName]);
        setMovieName({
            ...movieName,
            name: '',
        });
    };

    return (
        <div className="mt-5">
            <form className="d-flex justify-content-between mx-auto gap-1 w-50" onSubmit={onSubmit}>
                <input type="text" className="form-control" placeholder="Enter Movie Name" required onChange={onChange} value={movieName.name} />
                <button type="submit" className="btn btn-success">Search</button>
            </form>

            <div className="mt-3 w-50 mx-auto">
                {movieNames.map((item) => (
                    <MovieItem name={item.name} onDelete={onclick} id={item.id} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;