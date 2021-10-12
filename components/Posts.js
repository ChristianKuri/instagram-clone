import Post from './Post';

const posts = [
    {
        id: '1',
        username: 'sdasdfsdf',
        userImg: 'https://thispersondoesnotexist.com/image',
        img: 'https://thispersondoesnotexist.com/image',
        caption: 'Yeah this is an awesome image',
    },
    {
        id: '2',
        username: 'sdasdfsdf',
        userImg: 'https://thispersondoesnotexist.com/image',
        img: 'https://thispersondoesnotexist.com/image',
        caption: 'Yeah this is an awesome image',
    },
    {
        id: '3',
        username: 'sdasdfsdf',
        userImg: 'https://thispersondoesnotexist.com/image',
        img: 'https://thispersondoesnotexist.com/image',
        caption: 'Yeah this is an awesome image',
    },
];

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
            ))}
        </div>
    );
}

export default Posts;
