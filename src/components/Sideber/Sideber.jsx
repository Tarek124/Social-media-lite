/* eslint-disable react/prop-types */
import CreatePost from "../CreatePost/CreatePost";
import PostList from "./../postlist/PostList";

export default function Sideber({ route, setroute }) {
  
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="pt-10 overflow-auto drawer-content flex flex-col items-center justify-center">
        {route ? <CreatePost /> : <PostList />}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li
            onClick={() => {
              setroute(false);
            }}
          >
            <a href="#">Feed</a>
          </li>
          <li
            onClick={() => {
              setroute(true);
            }}
          >
            <a href="#">Create Post</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
