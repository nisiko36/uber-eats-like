import React from 'react';
import { useParams } from 'react-router-dom';

export const Foods = () => {
    const { restaurantsId } = useParams();

    return (
        <div>
            フード一覧
            <p>restaurantsIdは{restaurantsId}です</p>
        </div>
    )
}
