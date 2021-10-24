import Post from "./Post.js"

const posts =[
    {
        id:'123',
        username:'kris',
        userImg:'https://scontent.fsof5-1.fna.fbcdn.net/v/t1.6435-9/39064426_1973644069417349_2756720232042070016_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=65WGwHaL2psAX_O1oFf&_nc_ht=scontent.fsof5-1.fna&oh=880cf2709cdd5fb19f906e96707483d8&oe=6194072F',
        img:'https://scontent.fsof5-1.fna.fbcdn.net/v/t1.6435-9/39064426_1973644069417349_2756720232042070016_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=65WGwHaL2psAX_O1oFf&_nc_ht=scontent.fsof5-1.fna&oh=880cf2709cdd5fb19f906e96707483d8&oe=6194072F',
        caption:'GREEK GOD'
    },
    {
        id:'123',
        username:'kris',
        userImg:'https://scontent.fsof5-1.fna.fbcdn.net/v/t1.6435-9/39064426_1973644069417349_2756720232042070016_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=65WGwHaL2psAX_O1oFf&_nc_ht=scontent.fsof5-1.fna&oh=880cf2709cdd5fb19f906e96707483d8&oe=6194072F',
        img:'https://scontent.fsof5-1.fna.fbcdn.net/v/t1.6435-9/39064426_1973644069417349_2756720232042070016_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=65WGwHaL2psAX_O1oFf&_nc_ht=scontent.fsof5-1.fna&oh=880cf2709cdd5fb19f906e96707483d8&oe=6194072F',
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
