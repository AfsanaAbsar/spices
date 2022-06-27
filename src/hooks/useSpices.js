import { useEffect, useState } from "react"

const useSpices = () => {
    const [spices, setSpices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setSpices(data))
    }, [])

    return [spices, setSpices]
}
export default useSpices;