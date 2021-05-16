import React, { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../spinner/spinner";

import "./example.scss";

type ExampleProps = {
    title: string;
};

/**
 * This is an example component that loads in a markdown file in order to
 * demonstrate how MDX works.
 */
export default function Example({ title }: ExampleProps): JSX.Element {
    const [message, setMessage] = useState(null);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        // This loads data (see the `data.json` file in the `static` directory)
        // after an artificial delay.
        setTimeout(
            () =>
                axios
                    .get("/data.json")
                    .then((res) => setMessage(res.data["message"])),
            2000
        );
    }, []);

    function handleClick(e) {
        e.preventDefault();
        setShowImage(true);
    }

    return (
        <div className="box example">
            <h1 className="subtitle is-4">{title}</h1>
            <div className="columns">
                <div className="column is-one-third">
                    <p>{message ? message : <Spinner />}</p>
                </div>
                <div className="column">
                    {showImage ? (
                        <img
                            src="https://placekitten.com/400/400"
                            alt="placekitten"
                        />
                    ) : (
                        <button onClick={handleClick} className="button">
                            Click Me
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
