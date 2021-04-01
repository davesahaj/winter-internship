import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import WpHeading from '../../../components/Heading/WpHeading'
import WpReportRow from '../ReportRow/WpReportRow'
import "./Style.css"

const WpReports = () => {
    return (
        <>
            <Container className="container--primary">
                <WpHeading children="Your reports" headingStyle="heading--secondary" headingSize="heading--small" />
                <Container fluid>
                    <Row>
                        <Table className="reportsTable" borderless="true">
                            <thead>
                                <tr>
                                    <th>Keyword</th>
                                    <th>Language</th>
                                    <th>Date</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <WpReportRow />
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default WpReports

