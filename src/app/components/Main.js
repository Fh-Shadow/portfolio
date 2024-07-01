import React from "react";
import Button from './Button';

import { IonIcon } from '@ionic/react';
import '../icons';

import '../../styles/Main.css';

const Main = () => {
    return (
        <main className="main">
            <section className="mainSection" id="hello-there">
                <div className="hellothere">
                    <h3>Welcome, I'm Flávio Henrique</h3>
                    <h5>Front-End Developer & UI Designer</h5>
                    <h6>I'm fascinated by organization and standardization, aiming for efficiency and results to turn dreams into reality.</h6>
                </div>
                
                <div className="container">
                    
                </div>
            </section>
            <section className="mainSection" id="my-skills">DS</section>
            <section className="mainSection" id="projects">GFDS</section>
            <section className="mainSection" id="meet-me">32D</section>
        </main>
    );
};

export default Main;