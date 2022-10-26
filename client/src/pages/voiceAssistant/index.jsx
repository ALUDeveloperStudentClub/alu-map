/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import './syle.css';
import { Link } from 'react-router-dom';
import { CiMicrophoneOn } from 'react-icons/ci';
import { GiSoundWaves } from 'react-icons/gi';


const VoiceAssistantPage = () => {

    const [recording, setRecording] = useState(false);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key pressed');
        }
    };
    return (
        <div
            className="App"
            id="root"
            style={{
                backgroundImage: `url("https://i.ibb.co/DkLQ1zD/NR-footer-bg.jpg")`,
                backgroundSize: 'cover'
            }}>
            <header id="header">
                <div id="logoContainer">
                    <img
                        src={require('../../assets/ALU-logo-white-full.png')}
                        alt="logo"
                        id="logo"
                    />
                </div>
                <Link
                    to={'/'}
                    id="websiteLink">
                    GO BACK HOME
                </Link>
            </header>
            <body id='body'>
                <button style={{
                    backgroundColor: recording ? 'red' : 'gray',
                }} id="recordCircle" onClick={() => setRecording(!recording)}>
                    {recording ? <GiSoundWaves size={60} color={"#fff"} /> : <CiMicrophoneOn size={60} color={"#fff"} />}
                </button>
                <div
                    tabIndex="0"
                    onClick={(e) => handleKeyPress(e)}
                    onKeyDown={(e) => handleKeyPress(e)}
                ></div>
                <span>{recording ? "Recording...." : "Click the button to start recording"}</span>
            </body>
        </div>
    );
};

export default VoiceAssistantPage;
