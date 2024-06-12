import React, { useEffect }from 'react';
// apis
import { fetchFoods } from '../apis/foods';

export const Foods = ({
    match
}) => {
    useEffect(() => {
        fetchFoods(1)
        .then((data) =>
            console.log(data)
        )
    }, [])

    return (
        <div>
            フード一覧
        </div>
    )
}
