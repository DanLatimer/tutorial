import { useEffect, useState } from "react"

export function AddCat() {
    // const [cats, setCats] = useState([]);

    // useEffect(() => {
    //     if (cats.length > 0) {
    //         return;
    //     }

    //     fetch('http://localhost:3000/cat')
    //         .then(response => response.json())
    //         .then(cats => {console.log(cats); setCats(cats)})
    //         .catch(error => console.error(error.message));
    // }, [])
const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('form submitted', event)

    console.log(event.target[0].value)
    // alert(`The name you entered was: ${event.}`)
}
    
        return (
          <form onSubmit={handleSubmit}>
            <label>Enter your cats name:
              <input type="text" />
            </label>
            <input type ='submit'/>
          </form>
        )
}