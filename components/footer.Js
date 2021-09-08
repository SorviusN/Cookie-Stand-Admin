import React, {useState} from "react";

function Footer(props) {

    const [counter, setCounter] = useState(0);

    const iterate = (e) => {
        counter++;
    }

    return (
        <>
            <footer>
                <div id="footerText">&copy; 2021 Salmon Cookies Inc.</div>
                <div id="store-count-container">

                </div>
            </footer>
        </>
    )
}

export default Footer;
