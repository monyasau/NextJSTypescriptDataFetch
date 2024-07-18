import {postData} from "../types/types"

const PostCard=(props:postData)=> {
    return (
        <div className="border mx-auto relative rounded p-4 w-[90%] md:w-full">
            <span className="text-[10px] top-1 right-1 bg-gray-200 py-1 px-2 rounded-full absolute">
            {props.id}
            </span>
            <div className="text-xl capitalize font-semibold">
            {props.title}
            </div>
            <div>
            {props.body}
            </div>
        </div>
    );
}

export default PostCard;