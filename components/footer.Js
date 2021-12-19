import React, {useState} from "react";

function Footer(props) {

    // 
    const [counter, setCounter] = useState(0);

    const iterate = (e) => {
        // Iterate for the amount that the cart will have.
        counter = counter + 1;
    }

    return (
        <>
            <footer>
                <div class="top-of-footer">Jona Brown</div>
                <div id="footerText">&copy; 2021 Salmon Cookies Inc.</div>
                <div id="store-count-container"/>
                <button onClick={() => setCounter(counter + 1)}>
                    {counter}
                </button>
            </footer>
        </>
    )
}

export default Footer;
