import React from 'react'
import '../../styles/Logo.css'

function Logo () {
    return (
        <div className="logoContainer">
            <a href="./">
                <svg className="logo" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_8_2)">
                        <path className="logoPath" d="M0 33.3333L33.3333 0H66.6667V33.3333H50L33.3333 50V66.6667H0V33.3333Z" fill="currentColor" fill-opacity="0.9"/>
                    </g>
                    <g filter="url(#filter1_b_8_2)">
                        <path className="logoPath" d="M66.6666 50V33.3333H100V66.6666L66.6666 100H33.3333V66.6666H50L66.6666 50Z" fill="currentColor" fill-opacity="0.9"/>
                    </g>
                    <defs>
                        <filter id="filter0_b_8_2" x="-100" y="-100" width="266.667" height="266.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8_2"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8_2" result="shape"/>
                        </filter>
                        <filter id="filter1_b_8_2" x="-66.6667" y="-66.6667" width="266.667" height="266.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8_2"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8_2" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </a>
        </div>
    )
}

export default Logo