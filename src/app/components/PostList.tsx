import { postData } from "../types/types";
import PostCard from "./PostCard";
const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = response.json();
    return data;
  } catch (error) {
    console.error("😕", error);
  }
};
const PostList = async () => {
  const data: postData[] = await getData();
  return (
    <div className="w-full mb-8">
      <div className="md:max-w-screen-xl w-[90%] mx-auto">

    <div className="grid gap-8 xl:grid-cols-3 sm:grid-cols-2">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
    </div>
    </div>
  );
};
export default PostList;
