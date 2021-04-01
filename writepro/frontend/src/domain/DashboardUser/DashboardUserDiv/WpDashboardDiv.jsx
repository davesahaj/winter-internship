import React from 'react'
import { Container } from 'react-bootstrap'
import WpReports from '../Reports/WpReports'
import WpSearchKeywordForm from '../SearchKeywordForm/WpSearchKeywordForm'
import './Style.css'

const WpDashboardDiv = () => {
    return (
        <div>
            <Container fluid className="dashboardDiv">
                <WpSearchKeywordForm />
                <WpReports />
            </Container>
        </div>
    )
}

export default WpDashboardDiv
