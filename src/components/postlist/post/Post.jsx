/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";
import { PostsData } from "../../../store/store";

export default function Post({ post }) {
  const { deletePost } = useContext(PostsData);
  const [reacted, setReacted] = useState(false);
  return (
    <div className="card  bg-base-300 shadow-xl my-4 min-h-[300px] w-[60%]">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <p className="text-[13px]">{reacted ? "You like this post" : ""}</p>
          <button
            onClick={() => {
              setReacted(!reacted);
            }}
          >
            {reacted ? <FcLike size={28} /> : <FcLikePlaceholder size={28} />}
          </button>
          <button onClick={()=> deletePost(post.id)}>
            <MdDeleteOutline className="mt-[2px]" size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
