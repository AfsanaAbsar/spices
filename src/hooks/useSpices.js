import { useEffect, useState } from "react"

const useSpices = () => {
    const [spices, setSpices] = useState([]);
    useEffect(() => {
        fetch('https://infinite-hamlet-52819.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setSpices(data))
    }, [])

    return [spices, setSpices]
}
export default useSpices;