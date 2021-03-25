import React from 'react'
import WpButton from '../../../components/Button/WpButton'
import WpInputText from '../../../components/InputText/WpInputText'
import './Style.css'

const WpLoginForm = () => {
    
    return (
        <>
            <WpInputText placeholder="Enter Username" />
            <WpInputText placeholder="Enter Password" />
            <WpButton children="SUBMIT" buttonSize="btn--xxl" />
        </>
    )
}

export default WpLoginForm
