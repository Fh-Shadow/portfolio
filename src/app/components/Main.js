import React from "react";
// import Button from './Button';
import Grid from './Grid';

import { IonIcon } from '@ionic/react';
import '../icons';

import '../../styles/Main.css';

const Main = () => {
    return (
        <main className="main">
            <section className="mainSection" id="hello-there">
                <div className="hellothere">
                    <h2>Welcome, I'm Flávio Henrique</h2>
                    <h5>Front-End Developer <IonIcon className="ion-icon" icon="git-branch-outline" /> & UI Designer <IonIcon className="ion-icon" icon="image-outline" /></h5>
                </div>
                <Grid />
            </section>
            <section className="mainSection" id="my-skills">What</section>
            <section className="mainSection" id="projects">do you</section>
            <section className="mainSection" id="meet-me">find here?</section>
        </main>
    );
};

export default Main;