import React from 'react'
import './Style.css'

const STYLES = ['heading--primary', 'heading--secondary', 'heading--tertiary']
const SIZES = ['heading--large', 'heading--medium', 'heading--small']

const WpHeading = ({children, headingStyle, headingSize}) => {
    const checkHeadingStyle = STYLES.includes(headingStyle) ? headingStyle : STYLES[0]
    const checkHeadingSize = SIZES.includes(headingSize) ? headingSize : SIZES[0]

    return (
        <>
            <p className={`${checkHeadingStyle} ${checkHeadingSize}`}>{children}</p>
        </>
    )
}

export default WpHeading
