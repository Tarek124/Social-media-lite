/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer,  } from "react";

export const PostsData = createContext();
const initialData = [
  {
    id: "1",
    title: "Going to Dhaka",
    body: "Hi Friends, Iam going to Dhaka for my vocation. Hope to enjoy a lot. Peace out",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal  ki masti k baad bhi ho gaye hain pass. Hard to believe ",
    tags: ["Graduating", "Unbelieve"],
  },
];
const postsReducer = (state, action) => {
  let initstate = state;

  switch (action.type) {
    case "DELETE_POST":
      return (state = initstate.filter((p) => p.id !== action.payload));
    case "ADD_POST":
    
      return (initstate = [action.payload, ...state]);
    default:
      return state;
  }
};
export default function AllState({ children }) {
  const [state, dispatch] = useReducer(postsReducer, initialData);
  const deletePost = (id) => {
    dispatch({ type: "DELETE_POST", payload: id });
  };
  const addPost = (posttitle, postcontent, posttags) => {
    console.log(posttitle, postcontent, posttags);

    dispatch({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postcontent,
        tags: posttags,
      },
    });
  };
  return (
    <PostsData.Provider value={{ state, deletePost, addPost,}}>
      {children}
    </PostsData.Provider>
  );
}
