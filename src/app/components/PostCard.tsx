const PostCard=(props:{body:string;title:string})=> {
    return (
        <div>
            {props.title}
            {props.body}
        </div>
    );
}

export default PostCard;