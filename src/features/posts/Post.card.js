import React, { useMemo } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "./posts.slice";
import RedditCard from "./RedditCard";

const PostCard = () => {
  let { postSlug } = useParams();
  const post = useSelector(({ posts }) => posts?.post.data);
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(getPost(postSlug));
  }, [dispatch, postSlug]);

  return <div>{post && <RedditCard data={post} />}</div>;
};

export default PostCard;
