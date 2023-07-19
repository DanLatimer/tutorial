import { useEffect, useState } from "react"

export function CatList() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        if (cats.length > 0) {
            return;
        }

        fetch('http://localhost:3000/cat')
            .then(response => response.json())
            .then(cats => {console.log(cats); setCats(cats)})
            .catch(error => console.error(error.message));
    }, [])

    return <ul>
        {cats.map(cat => <li key={cat}>{cat}</li>)}
    </ul>
}