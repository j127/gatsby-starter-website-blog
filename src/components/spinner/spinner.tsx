import React from "react";

import "./spinner.scss";

type SpinnerProps = {
    theme?:
        | "arrow"
        | "bar"
        | "bar2"
        | "beam"
        | "box-bounce"
        | "bullet"
        | "bullseye"
        | "circle"
        | "countdown"
        | "dots"
        | "dots2"
        | "dots3"
        | "earth"
        | "fish"
        | "hamburger"
        | "hearts"
        | "lifting"
        | "line"
        | "line2"
        | "matrix"
        | "monkey"
        | "moon"
        | "open-circle"
        | "plus"
        | "rhomb"
        | "runner"
        | "square"
        | "star"
        | "time"
        | "toggle"
        | "triangle"
        | "triangles"
        | ""; // an empty string produces 3 horizontal dots
};

/**
 * Add a spinner.
 *
 * Available themes should auto-complete in the editor.
 *
 * See the docs for more information:
 * https://github.com/maxbeier/text-spinners
 *
 * Add more props if you want more customization. Or switch out the
 * text-spinners with an image.
 */
export default function Spinner({ theme = "" }: SpinnerProps): JSX.Element {
    return (
        <div className={`spinner loading ${theme}`} title="Loading..."></div>
    );
}
