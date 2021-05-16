import React from "react";

import "./spinner.scss";

type SpinnerProps = {
    theme?: "dots" | "dots2" | "";
};

/**
 * Add a spinner.
 *
 * Available themese are "dots", "dots2" (default), and ""
 *
 * See the docs for more information:
 * https://github.com/maxbeier/text-spinners
 *
 * Add more props if you want more customization. Or switch out the
 * text-spinners with an image.
 */
export default function Spinner({
    theme = "dots2",
}: SpinnerProps): JSX.Element {
    return (
        <div className={`spinner loading ${theme}`} title="Loading..."></div>
    );
}
