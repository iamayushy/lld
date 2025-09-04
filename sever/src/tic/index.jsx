import { useMemo, useState } from "react";
import Grid from "./grid"

const TicTacToe = ({ n }) => {
    const [itm, setItem] = useState(Array.from({ length: n * n }).map(() => null));
    const [xIsNext, setXIsNext] = useState(false);
    const [position, setPosition] = useState(null);
    const winnerPath = (matrix) => {
        return matrix;
    }
    function getMatrix(arr, size) {
        return Array.from({ length: size }, (_, i) => arr.slice(i * size, (i + 1) * size));
    }
    console.log(winnerPath);
    const handleClick = (i) => {
        console.log(itm);

        if (itm[i]) return;
        else {

            const existing = [...itm];
            existing[i] = xIsNext ? "X" : "O";
            setPosition((prev) => ({ ...prev, [i]: xIsNext ? "X" : "O" }));
            setItem(existing);
            setXIsNext(prev => !prev);
        }
    };
    const winner = winnerPath(getMatrix(itm, n));
    console.log(winner);
    console.log(position);
    return (<div className="flex h-screen justify-center items-center">
        <div
            className="grid border gap-0"
            style={{
                gridTemplateColumns: `repeat(${n}, 80px)`,
                gap: 0,
            }}
        >
            {itm.map((_, index) => (
                <Grid key={index} element={_} handleClick={() => handleClick(index)} />
            ))}
        </div>
    </div>
    );
}

export default TicTacToe;