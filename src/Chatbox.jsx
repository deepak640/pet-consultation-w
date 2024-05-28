import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Button from "./styles/Button";

const Chatbox = () => {
    const [state, setState] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const toggleState = () => {
        setState(!state);
    };

    const onSendButton = () => {
        if (inputText === "") {
            return;
        }

        let msg1 = { name: "User", message: inputText };
        setMessages([...messages, msg1]);

        fetch('/predict', {
            method: 'POST',
            body: JSON.stringify({ message: inputText }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = { name: "Dev", message: r.answer };
            setMessages([...messages, msg2]);
            setInputText('');
        })
        .catch((error) => {
            console.error('Error:', error);
            setInputText('');
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents default behavior of submitting a form
            onSendButton();
        }
    };

    useEffect(() => {
        const chatbox = document.querySelector('.chatbox__support');
        if (state) {
            chatbox.classList.add('chatbox--active');
        } else {
            chatbox.classList.remove('chatbox--active');
        }
    }, [state]);

    return (
     <Wrapper>
        <div className="chatbox-container">
            <Button className="chatbox__button" onClick={toggleState}>Toggle Chat</Button>
            <div className={`chatbox__support ${state ? 'chatbox--active' : ''}`}>
                <div className="chatbox__messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`messages__item messages__item--${message.name.toLowerCase()}`}>
                            {message.message}
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown} // Use onKeyDown event handler
                />
                <Button className="send__button" onClick={onSendButton}>Send</Button>
            </div>
        </div>
     </Wrapper>
    );
};

const Wrapper = styled.section`
padding: 10rem 15rem;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Nunito', sans-serif;
font-weight: 400;
font-size: 16px;
height: 50px;


* {
    Box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    //padding: 10px 5px;
    // height: 90px;
    // width: 300px;
}

// body {
//     font-family: 'Nunito', sans-serif;
//     font-weight: 400;
//     font-size: 16px;
//     /* background: #F1F1F1; */
// }

/* Chatbox container */
.chatbox-container {
    //position: fixed;
    bottom: 20px;
    right: 20px;
    align-items: center;
    //overflow: hidden;
}

/* Toggle button */
.chatbox__button {
    //position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 2; /* Ensure the button stays above the chatbox */
}

/* Chatbox support */
.chatbox-support {
    position: relative;
    width: 350px;
    max-height: 80vh;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateY(100%);
    opacity: 0;
    z-index: 1;
}

/* Active state */
.chatbox-container.active #chatbox-support {
    transform: translateY(0);
    opacity: 1;
}

/* Header */
.chatbox-header {
    background: linear-gradient(93.12deg, #581B98 0.52%, #9C1DE7 100%);
    color: #fff;
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.chatbox-heading-header {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5px;
}

.chatbox-description-header {
    font-size: 0.9rem;
}

/* Messages */
.chatbox__messages {
    padding: 20px;
    text-align: center;
}

.messages__item {
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
}

.messages__item--dev {
    background: linear-gradient(268.91deg, #581B98 -2.14%, #9C1DE7 99.69%);
    color: #fff;
    align-self: flex-start;
    text-align: left;
}

.messages__item--user {
    background: #007bff;
    color: #fff;
    align-self: flex-end;
    text-align: right;
}

/* Footer */
#chatbox-footer {
    display: flex;
    align-items: center;
    padding: 20px;
    background: linear-gradient(268.91deg, #581B98 -2.14%, #9C1DE7 99.69%);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

#chatbox-footer input {
    flex-grow: 1;
    padding: 12px;
    border: none;
    border-radius: 20px;
    margin-right: 10px;
}

.send__button {
    background: #007bff;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;


.send__button:hover {
    background: #0056b3;
}  

`;

export default Chatbox;

