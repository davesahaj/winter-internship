import { Button } from 'react-bootstrap';
import React from 'react'

const STYLES = ['btn-primary', 'btn-secondary']
const SIZES = ['btn-lg', 'btn-sm']

const WpButton = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
            <Button className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}
            >
                {children}
            </Button>
    )
}

export default WpButton
