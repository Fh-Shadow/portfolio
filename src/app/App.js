import React, { useState, useEffect } from 'react'
import './icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

/* Components */
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

/* Styles */
import '../styles/App.css'
import '../styles/theme.css'

/* Hooks */
import useTitle from '../hooks/useTitle'
import useFavicon from '../hooks/useFavicon'

function App() {
    /* Use Hooks */
    const [appName, setAppName] = useState('Site')

    useTitle(appName)
    useFavicon('%PUBLIC_URL%/../assets/favicon.svg')

    useEffect(() => {
        fetch('/manifest.json')
            .then(response => response.json())
            .then(data => setAppName(data.short_name || 'My Portfolio'))
            .catch(error => console.error('Error fetching manifest:', error))
    }, [])

   return (
        <div className="App">
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default App