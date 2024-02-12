import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favorite = () => {
  const fav = useSelector((state) => state.fav.content);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemove = (i) => {
    alert("Job removed from favorites");
    dispatch({
      type: "REMOVE_FROM_FAV",
      payload: i,
    });
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col>
          <Button
            variant="success"
            className="mb-2"
            onClick={() => navigate("/")}
          >
            Go back
          </Button>
          <ListGroup>
            {fav.map((job, i) => (
              <ListGroupItem key={i}>
                <Row className="align-items-center">
                  <Col>{job.title}</Col>
                  <Col>
                    <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                  </Col>
                  <Col>
                    <span>{job.job_type}</span>
                  </Col>
                  <Col className="text-end">
                    <Button variant="danger" onClick={() => handleRemove(i)}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorite;
