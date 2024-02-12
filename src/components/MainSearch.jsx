import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const favCounter = useSelector((state) => {
    return state.fav.content.length;
  });

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
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
              {favCounter === 0 ? "no job saved" : `${favCounter} jobs saved`}
            </span>
          </Button>
        </Col>
        <Col xs={10} className="mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
