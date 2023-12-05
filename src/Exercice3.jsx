import React, { useState } from 'react';

function allList() {
    const initialList = [];
    initialList.push({
        text: ''
    });
    return initialList;
}

export default function Exercice3() {
    const [list, setList] = useState(allList);
    const [text, setText] = useState('');

    return (
        <>
            <input
                type='text'
                placeholder='Elément à ajouter...'
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <button
                onClick={() => {
                    setText('');
                    setList([{
                        text: text
                    }, ...list]);
                }}
            >Ajouter</button>
            {list.map(item => (
                <li>
                    {item.text}
                </li>
            ))}
        </>
    );
}