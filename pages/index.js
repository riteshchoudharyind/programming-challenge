// pages/index.js
import { getSortedPosts } from '../lib/posts';
import PostList from '../components/PostList';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

export default function Home({ posts }) {
  const reduxPosts = useSelector((state) => state.posts.posts);
 
  return (
    <div>
      <Header />
      <div className='postlist my-5'>
        <div className='container'>
          <div className='row'>
            <h1 className='w-100 mb-4'><strong>Welcome to the Blog</strong></h1>
            {reduxPosts && <PostList posts={reduxPosts} />}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();
  return {
    props: {
      posts,
    },
  };
}