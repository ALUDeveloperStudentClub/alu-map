import React from 'react';
import './contributors.style.css';

const Contributors = () => {
    return (
        <div
            className="App"
            id="root"
            style={{
                backgroundImage: `url("https://i.ibb.co/DkLQ1zD/NR-footer-bg.jpg")`,
                backgroundSize: 'cover'
            }}
        >
            <header id="header">
                <div id="logoContainer">
                    <img
                        src={require('../../assets/ALU-logo-white-full.png')}
                        alt="logo"
                        id="logo"
                    />
                </div>
                <a
                    href="https://github.com/ALUDeveloperStudentClub/alu-map"
                    target="_blank"
                    rel="noreferrer"
                    id="websiteLink"
                >
                    GO TO GITHUB REPO
                </a>
            </header>
            <main id="body">
                <h3>WELCOME TO ALU MAP DEVELOPMENT</h3>
                <span>Documetation</span>
                <ul>
                    <li>If you haven't already run, npm install to install node modules</li>
                    <li>
                        Install{' '}
                        <a
                            href="https://www.docker.com/"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                color: 'orange'
                            }}
                        >
                            Docker
                        </a>{' '}
                        Desktop for Windows, Linux or Mac, and run it. If you are using Windows,
                        make sure you have enabled{' '}
                        <a
                            href="https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v"
                            target={'_blank'}
                            rel="noreferrer"
                            style={{
                                color: 'orange'
                            }}
                        >
                            Hyper-V
                        </a>{' '}
                        and Virtualization Technology in your BIOS.
                    </li>
                    <li>
                        Run docker-compose up --build to start the containers. This will take a few
                        minutes the first time you run it.
                    </li>
                    <li>
                        Run npm start to start the development server. The server will run on port
                        8080.
                    </li>
                    <li>
                        Check the list of{' '}
                        <a
                            href="https://github.com/ALUDeveloperStudentClub/alu-map/issues"
                            rel="noreferrer"
                            target={'_blank'}
                            style={{
                                color: 'orange'
                            }}
                        >
                            issues
                        </a>{' '}
                        on github and pick one to work on (Be sure to communicate it through a
                        comment). If you have any questions, contact the repo organiser (Dirac156).
                    </li>
                </ul>
                <span>HAPPY CODING🤗 ~ Perfect Gift IZIHIRWE</span>
            </main>
        </div>
    );
};

export default Contributors;
