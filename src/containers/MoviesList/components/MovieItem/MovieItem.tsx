import * as React from "react";

interface Props {
    id: string;
    name: string;
    onDelete: (id: string) => void;
}

const MovieItem: React.FC<Props> = ({name, onDelete, id}) => {
    return (
        <div className="card mb-1">
            <div className="row p-2 align-items-center">
                <div className="card-text col-8">{name}</div>
                <button className="btn-close ms-auto me-2" onClick={() => onDelete(id)}></button>
            </div>
        </div>
    );
};

export default MovieItem;