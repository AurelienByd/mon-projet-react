import React, { useState } from 'react';

export default function Exercice2() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Compteur = {count}
            </button>
        </div>
    );
}