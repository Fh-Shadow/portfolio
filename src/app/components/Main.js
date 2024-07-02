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
                    <h2>These are my skills</h2>
                    <ul>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon={logoHtml5} />
                            </div>
                            <div className="skillDescription">
                                <h5>HTML 5</h5>
                                <ul>
                                    <li>Domínio em tabelas e listas</li>
                                    <li>Bom em APIs e Canvas</li>
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
                                    <li>Bom em responsividade</li>
                                    <li>Domínio em layouts</li>
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
                                    <li>Bom em funções e objetos</li>
                                    <li>Bom em tratamento de erros</li>
                                    <li>aprendendo usar módulos</li>
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
                                    <li>aprendendo usar APIs</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon="server-outline" />
                            </div>
                            <div className="skillDescription">
                                <h5>MySQL</h5>
                                <ul>
                                    <li>bom em tratamento de dados</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="skillIcon">
                                <IonIcon className="skillItem" icon="server-outline" />
                            </div>
                            <div className="skillDescription">
                                <h5>MySQL</h5>
                                <ul>
                                    <li>bom em tratamento de dados</li>
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
                                    <li>aprendendo usar componentização</li>
                                    <li>aprendendo usar módulos</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="mainSection" id="projects">do you</section>
            <section className="mainSection" id="meet-me">found here?</section>
        </main>
    )
}

export default Main