import React from "react"
// import Button from './Button'
import Grid from './Grid'

import { IonIcon } from '@ionic/react'
import { logoHtml5, logoCss3 } from 'ionicons/icons'

import '../../styles/Main.css'

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
            <section className="mainSection" id="my-skills">
                <div className="myskills">
                    <div className="skillList">
                        <IonIcon className="skillItem" icon={logoHtml5} />
                        <IonIcon className="skillItem" icon={logoCss3} />
                        <IonIcon className="skillItem" icon="logo-javascript" />
                        <IonIcon className="skillItem" icon="logo-python" />
                        <IonIcon className="skillItem" icon="logo-nodejs" />
                        <IonIcon className="skillItem" icon="logo-react" />
                        <IonIcon className="skillItem" icon="logo-markdown" />
                    </div>
                </div>
            </section>
            <section className="mainSection" id="projects">do you</section>
            <section className="mainSection" id="meet-me">found here?</section>
        </main>
    )
}

export default Main