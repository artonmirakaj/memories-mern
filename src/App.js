import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { getPosts } from './actions/postsAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <div>
      <Form />
      <Posts />
    </div>
  );
}

export default App;
