import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Placeholder,
} from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs.results);
  const loading = useSelector((state) => state.jobs.loading);
  const favCounter = useSelector((state) => state.fav.content.length);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobAction(query));
  };

  return (
    <Container>
      <h1 className="display-1 text-center">Remote Jobs Search</h1>
      <Row className="justify-content-center">
        <Col xs={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={2} className="text-end">
          <Button variant="success" onClick={() => navigate("/Favorites")}>
            <i className="bi bi-heart-fill"></i>
            <span className="ms-2">
              {favCounter === 0
                ? "No jobs saved"
                : favCounter === 1
                ? `${favCounter} job saved`
                : `${favCounter} jobs saved`}
            </span>
          </Button>
        </Col>
        <Col xs={10} className="mb-5">
          {loading ? (
            <>
              <div className="my-4">
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                  <Placeholder xs={12} />
                </Placeholder>
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
              </div>
              <div className="my-4">
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                  <Placeholder xs={12} />
                </Placeholder>
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
              </div>
              <div className="my-4">
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                  <Placeholder xs={12} />
                </Placeholder>
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
              </div>
            </>
          ) : jobs.length === 0 ? (
            <p className="mt-2 ms-2 fst-italic">
              To start search a company or a job
            </p>
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
