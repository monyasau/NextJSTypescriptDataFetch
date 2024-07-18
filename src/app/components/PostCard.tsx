import {postData} from "../types/types"

const PostCard=(props:postData)=> {
    return (
        <div className="border  mx-auto w-[80%]">
            {props.id}
            {props.title}
            {props.body}
        </div>
    );
}

export default PostCard;