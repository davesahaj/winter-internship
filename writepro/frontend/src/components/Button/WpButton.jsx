import { Button } from 'react-bootstrap';
import React from 'react'
import './Style.css';

const STYLES = ['btn-primary', 'btn-secondary']
const SIZES = ['btn--xxl', 'btn-sm']

const WpButton = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
            <Button className={`btn WpButton rounded-0 ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}
            >
                {children}
            </Button>
    )
}

export default WpButton
