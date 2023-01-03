const OutSideClick = (callback, useRef, useEffect) => {
    const ref = useRef()

    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    })

    return ref
}

export default OutSideClick;