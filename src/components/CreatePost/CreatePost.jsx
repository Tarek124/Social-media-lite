import { useContext, useRef } from "react";
import { PostsData } from "../../store/store";
// import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const userTitle = useRef();
  const body = useRef();
  const hashtag = useRef();
  const { addPost } = useContext(PostsData);
  // handleForm function
  const handleForm = (e) => {
    const title = userTitle.current.value;
    const content = body.current.value;
    const tags = hashtag.current.value;
    // passing all data to addpost function
    addPost(title.toUpperCase(), content, tags);
    userTitle.current.value = "";
    body.current.value = "";
    hashtag.current.value = "";
    e.preventDefault();
  };
  return (
    <form className="w-[60%]" onSubmit={handleForm}>
      <div className="my-6">
        <label htmlFor="userId" className="form-label text-[#ffffffea]">
          Title
        </label>
        <input
          ref={userTitle}
          type="text"
          className="input input-bordered input-info w-full mt-1"
          placeholder="Enter your title"
        />
      </div>
      <div className="my-6">
        <label htmlFor="userId" className="form-label text-[#ffffffea]">
          Content
        </label>
        <textarea
          ref={body}
          rows={4}
          type="text"
          placeholder="what's your mind ?"
          className="textarea textarea-info w-full mt-2"
        />
      </div>{" "}
      <div className="my-6">
        <label htmlFor="userId" className="form-label text-[#ffffffea]">
          #Hashtags{" "}
        </label>
        <input
          ref={hashtag}
          type="text"
          className="input input-bordered input-info w-full mt-1"
          placeholder="hashtag"
        />
      </div>
      <input
        type="submit"
        className="btn btn-outline btn-info"
        value={"Post"}
      />
    </form>
  );
}
