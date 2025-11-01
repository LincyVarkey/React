import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <>
            <h2>{`${err.statusText} : ${err.status}`}</h2>
            <h3>Something went wrong</h3>
        </>
    )
}

export default Error;