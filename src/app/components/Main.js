import React from "react"
// import Button from './Button'
import Grid from './Grid'

import { IonIcon } from '@ionic/react'
import { logoHtml5, logoCss3 } from 'ionicons/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <h2>These are my skills</h2>
                    <ul>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon={logoHtml5} />
                            </div>
                            <div className="skillDescription">
                                <h5>HTML 5</h5>
                                <ul>
                                    <li>Proficiency in tables and lists</li>
                                    <li>Good with APIs and Canvas</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon={logoCss3} />
                            </div>
                            <div className="skillDescription">
                                <h5>CSS 3</h5>
                                <ul>
                                    <li>Good in responsiveness</li>
                                    <li>Proficiency in layouts</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon="logo-javascript" />
                            </div>
                            <div className="skillDescription">
                                <h5>JavaScript</h5>
                                <ul>
                                    <li>Good with functions and objects</li>
                                    <li>Good with error handling</li>
                                    <li>Learning to use modules</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon="logo-python" />
                            </div>
                            <div className="skillDescription">
                                <h5>Python</h5>
                                <ul>
                                    <li>Learning to use APIs</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="skillIcon">
                                <FontAwesomeIcon icon={['fab', 'php']} className="skillItem" />
                            </div>
                            <div className="skillDescription">
                                <h5>PHP</h5>
                                <ul>
                                    <li>Good with data processing</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon="server" />
                            </div>
                            <div className="skillDescription">
                                <h5>MySQL</h5>
                                <ul>
                                    <li>Learning data security</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon="logo-react" />
                            </div>
                            <div className="skillDescription">
                                <h5>React</h5>
                                <ul>
                                    <li>Learning to use componentization</li>
                                    <li>Learning to use modules</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="mainSection" id="projects">do you</section>
            <section className="mainSection" id="meet-me">
                <div className="meetme">
                    <h2>Meet me there!</h2>
                    <div className="meetcontainer">
                        <img src="../../assets/myself.svg" alt="Hello! It's me Flávio" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main