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
    <div className="grid md:grid-cols-2">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
export default PostList;
