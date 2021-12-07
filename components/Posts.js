import Post from "./Post.js"

const posts =[
    {
        id:'123',
        username:'kris',
        userImg:'profilepic.jpg',
        img:'profilepic.jpg',
        caption:'GREEK GOD'
    },
    {
        id:'125',
        username:'kris',
        userImg:'profilepic.jpg',
        img:'profilepic.jpg',
        caption:'GREEK GOD'
    },
];

function Posts() {
    return (
        <div>
            {posts.map(post =>(
                <Post 
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
                />
            ))}
            
        </div>
    )
}

export default Posts
