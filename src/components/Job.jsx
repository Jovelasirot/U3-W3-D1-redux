import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.fav.content);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    dispatch({
      type: "ADD_TO_FAV",
      payload: data,
    });
    setIsFavorite(true);
  };

  useEffect(() => {
    setIsFavorite(favorites.some((savedJob) => savedJob._id === data._id));
  }, [favorites, data._id]);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={5} className="text-end">
        <Button
          variant="success"
          onClick={handleAddToFavorites}
          disabled={isFavorite}
        >
          {isFavorite ? (
            <i className="bi bi-heart-fill"></i>
          ) : (
            <i className="bi bi-heart"></i>
          )}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
