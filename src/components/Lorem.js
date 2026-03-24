import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";

const Lorem = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <p>
        <strong>{data.title}</strong>
      </p>
      <p>{data.body}</p>
    </div>
  );
};

export default Lorem;