import React, { useState } from 'react';

export default function Exercice1() {
        const [name, setName] = useState({
            lastname: '',
            firstname: '',
        });

        return (
            <>
                <div>
                    <input 
                        type='text' 
                        placeholder='Votre nom' 
                        value={name.lastname} 
                        onChange={event => {
                            setName({
                                ...name,
                                lastname: event.target.value
                            });
                        }}
                    />
                    <input 
                        type='text' 
                        placeholder='Votre prénom' 
                        value={name.firstname} 
                        onChange={event => {
                            setName({
                                ...name,
                                firstname: event.target.value
                            });
                        }}
                    />
                </div>
                <p>Bonjour {name.lastname}{''} {name.firstname}{''}</p>
            </>
        );
    }