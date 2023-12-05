import React, { useState } from 'react';

// function allList() {
//     const list = [];
//     for (let l = 0; l<100; l++) {
//         list.push({
//             text: ''
//         });
//     }
//     return list;
// }

export default function Exercice3() {
    const [text, setText] = useState({
        item: '',
    });



    return (
        <>
            <input
                type='text'
                placeholder='Elément à ajouter...'
                value={text.item}
                onChange={event => setText(event.target.value)}
            />
            <button
                onClick={event => {
                    setText({
                        ...text,
                        item: event.target.value
                    });
                }}
            >Ajouter</button>

        </>
    );
}