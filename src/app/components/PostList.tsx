import PostCard from "./PostCard";

const PostList=()=>{
    const getData= async()=>{
        try{
            let data  =(await fetch('https://jsonplaceholder.typicode.com/posts')).json();
            return data;
        }catch (error){
            console.error("😕",error)
        }
    }
    
    return (
        <div className="grid md:grid-col-2">
            
            <PostCard title="ssmms" body={"dd"}/>
            <PostCard title="smss" body={"dd"}/>
            <PostCard title="vvv" body={"dd"}/>
        </div>
    );
}
export default PostList;