import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Form = ({ getSubmissions }) => {
    // NAME
    const [inputName, inputNameUpdate] = useState("Beyoncé");
    const inputNameOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputNameUpdate(theValue);
    };

    // EMAIL
    const [inputEmail, inputEmailUpdate] = useState("beyoncé@parkwood.com");
    const inputEmailOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputEmailUpdate(theValue);
    };

    // MESSAGE
    const [inputMessage, inputMessageUpdate] = useState(
        "Look around everybody on mute"
    );
    const inputMessageOnChange = (e) => {
        const theValue = e.target.value;
        console.log({ theValue });
        inputMessageUpdate(theValue);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuidv4(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        };

        await axios.post("http://localhost:4059/submissions", postData);
        getSubmissions();

        console.log({ postData });
    };

    return (
        <FormStyled className="Form" onSubmit={onSubmit}>
            {/* Name */}
            <div className="control-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={inputNameOnChange}
                />
            </div>

            {/* Email */}
            <div className="control-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={inputEmail}
                    onChange={inputEmailOnChange}
                />
            </div>

            {/* Message */}
            <div className="control-group">
                <label htmlFor="name">Message:</label>
                <textarea
                    id="message"
                    value={inputMessage}
                    onChange={inputMessageOnChange}
                />
            </div>

            <button type="submit">Send</button>
        </FormStyled>
    );
};

export default Form;

const FormStyled = styled.form`
    .control-group {
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: solid 1px #999;

        &:focus {
            background-color: white;
        }
    }

    textarea {
        height: 150px;
    }

    button {
        background-color: #d4b784;
        padding: 10px 5px;
        color: white;
        width: 150px;
        border: none;
        outline: none;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #976104;
        }
        &:active {
            background-color: #002020;
        }
    }
`;
