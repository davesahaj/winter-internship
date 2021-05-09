import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import Inputgroup from '../../../components/InputgroupPrepend/InputgroupPrepend';
import Titletext from '../../../components/Titletext/Titletext';

const AddFilters = (props) => {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="filtersModal">
            Add Filters
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
            <Container><Titletext text="Filter Websites for search results"/></Container>
              <Col sm={12}>
                <Inputgroup text="Website Blacklist" />
              </Col>            
            </Row>
            <Row>
              <Col sm={12}>
                <Inputgroup text="Preferred Websites" />
              </Col>
            </Row>
            <Row>
              <Container><Titletext text="Date Filter for search results"/></Container>
              <Col sm={6}>
                <Inputgroup type="date" text="From" />
              </Col>
              <Col sm={6}>
                <Inputgroup type="date" text="To" />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AddFilters;