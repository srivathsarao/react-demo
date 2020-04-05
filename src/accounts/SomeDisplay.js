import React from 'react';
import {useParams} from 'react-router-dom';

export function SomeDisplay() {
    let { id } = useParams()

    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}
