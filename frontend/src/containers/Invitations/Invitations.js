import "./Invitations.css";
import { Container, Row, Col, Table, Badge, ListGroup } from 'react-bootstrap'
import ButtonLight from "../../components/ButtonLight/ButtonLight";
import Titletext from "../../components/Titletext/Titletext";
import Footer from "../../components/Footer/Footer";

const Invitations = () => {
  return (
      <>
    <Container className="container--primary mt-4">
                <div class="p-2">
                <Titletext text="Invite and Share" />
                </div>

                <Container fluid>
                    <Row>
                        <Col>
                            <h2><Badge variant="primary">Microservices Report</Badge></h2>
                        </Col>
                    </Row>
            
                    <Row className="py-3">
                        <Col sm={{ span: 6, offset: 0 }}>
                            <ButtonLight text="Invite" />
                        </Col>
                        <Col sm={{ span: 6, offset: 0 }}>
                            <ButtonLight text="Share" />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className="container--primary mt-4">
                <div class="p-2">
                    <Titletext text="Your Invitations" />
                </div>
            <Container fluid className="mb-4">
            <Row>
            <Table className="reportsTable" borderless="true" responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
            <tr className="reportRow">
                <td>Rushiraj dave</td>
                <td>201912117@daiict.ac.in</td>
                <td>Joined</td>
                <td>
                    <ButtonLight text="Remove" btype="submit" bSize="btn-sm" />
                </td>
                <td>
                    <ButtonLight text="Permissions" btype="submit" bSize="btn-sm" />
                </td>
            </tr>
            <tr className="reportRow">
                <td>Sahaj Dave</td>
                <td>201912103@daiict.ac.in</td>
                <td>Joined</td>
                <td>
                    <ButtonLight text="Remove" btype="submit" bSize="btn-sm" />
                </td>
                <td>
                    <ButtonLight text="Permissions" btype="submit" bSize="btn-sm" />
                </td>
            </tr>
            <tr className="reportRow">
                <td>Shivi</td>
                <td>201912084@daiict.ac.in</td>
                <td>Pending</td>
                <td>
                    
                </td>
                <td>
                    <ButtonLight text="Permissions" btype="submit" bSize="btn-sm" />
                </td>
            </tr>
            </tbody>
            </Table>
        </Row>
    </Container>
    </Container>
    <Footer />
</>
  );
};

export default Invitations;