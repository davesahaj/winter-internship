import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WpButton from '../../../components/Button/WpButton'
import WpHeading from '../../../components/Heading/WpHeading'
import WpInputDropdown from '../../../components/InputDropdown/WpInputDropdown'
import WpInputText from '../../../components/InputText/WpInputText'
import './Style.css'

const WpSearchKeywordForm = () => {
    return (
        <>
            <Container className="container--primary">
                <WpHeading children="Create a new report" headingStyle="heading--secondary" headingSize="heading--small" />
                <Container fluid>
                    <Row>
                        <Col>
                            <WpInputText placeholder="Keywords" inputTextStyle="inputText--secondary" />
                        </Col>
                        <Col>
                            <WpInputDropdown placeholder="Language" />
                        </Col>
                        <Col>
                            <WpInputDropdown placeholder="Country" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 3, offset: 9 }}>
                            <WpButton children="Search" buttonStyle="btn--primary" buttonSize="btn--l"></WpButton>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default WpSearchKeywordForm
