import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap'
import Titletext from '../../../components/Titletext/Titletext';


const AddArticle = (props) => {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="articlesModal">
          Add articles into ArticleList
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
            
              <Col sm={12}>
              <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" />
                </Form.Group>
                </Form>
              </Col>            
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AddArticle;