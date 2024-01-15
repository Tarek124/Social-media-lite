import { useContext } from "react";
import Post from "./post/Post";
import { PostsData } from "../../store/store";

export default function PostList() {
  const { state } = useContext(PostsData);
  return (
    <>
      {state.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
