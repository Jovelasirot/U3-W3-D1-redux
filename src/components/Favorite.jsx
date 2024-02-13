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
import { removeFromFavAction, resetFavList } from "../redux/actions";

const Favorite = () => {
  const fav = useSelector((state) => state.fav.content);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemove = (i) => {
    alert("Job removed from favorites");
    dispatch(removeFromFavAction(i));
  };

  const handleReset = () => {
    const resetConfirm = window.confirm(
      "Are you sure you want to reset your favorites job list?"
    );

    if (resetConfirm) {
      dispatch(resetFavList());
      alert("List has been reseted");
    } else {
      alert("The reset was canceled");
    }
  };
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center ">
      <h1 className="display-4">Your favorite jobs</h1>
      <Row>
        <Col>
          <Button
            variant="success"
            className="mb-2"
            onClick={() => navigate("/")}
          >
            Go back
          </Button>
        </Col>
        <Col className="text-end">
          <Button
            variant="danger"
            className="mb-2"
            onClick={() => handleReset()}
          >
            RESET <i className="bi bi-x-circle"></i>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {fav.length === 0 ? (
              <p className="ms-2 fst-italic">
                You don't have any jobs added to favorite
              </p>
            ) : (
              fav.map((job, i) => (
                <ListGroupItem key={i}>
                  <Row className="align-items-center">
                    <Col>{job.title}</Col>
                    <Col>
                      <Link to={`/${job.company_name}`}>
                        {job.company_name}
                      </Link>
                    </Col>
                    <Col>
                      <span>{job.job_type}</span>
                    </Col>
                    <Col className="text-end">
                      <Button variant="warning" onClick={() => handleRemove(i)}>
                        <i className="bi bi-trash text-light "></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorite;
