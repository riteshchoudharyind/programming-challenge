// PostList.js
import Link from 'next/link';
const PostList = ({ posts }) => {
 
  return (
    <ul className='post row'>
      {posts?.map((post) => (
        <li key={post.id} className='col-md-4'>
          <div className='postItem '>
          <Link href={`/posts/${post?.id}`}>
              <h2>{post?.title}</h2>
          </Link>
          <p>{post?.summary}</p>
          <p>Publication Date: {post.publicationDate}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;