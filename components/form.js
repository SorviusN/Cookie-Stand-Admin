import React, {useState} from "react";
export const name = "Jona";
// import {name} from "./form.js"

function Form(props) {

    const [formInput, setFormInput] = useState({});

    const handleChange = (e) => {
        // Using spread operator to spread each event target name to each event target value inside of formInput.
        setFormInput({...formInput,[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formInput);
    }

    return (
        <>
            {/* usage of tailwind css */}
            <form class="bg-gray-300 border-black container mx-auto rounded-lg box-border h-48 py-8 px-8" onSubmit={onSubmit}>
                <label>Location</label>
                <input id='locationInput' placeholder='Enter a location' name="location" onChange={handleChange}></input>
                <br></br>

                <label>Minimum Customer per Hour</label>
                <input class="average-inputs" name="minimumCustomers" onChange={handleChange}></input>

                <label>Maximum Customer per Hour</label>
                <input class="average-inputs" name="maximumCustomers" onChange={handleChange}></input>

                <label>Average Cookies per Sale</label>
                <input class="average-inputs" name="averageCookiePerSale" onChange={handleChange}></input>

                <button id="formSubmit" type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;
