// pages/posts/[slug].js
import { useRouter } from 'next/router';

import CommentForm from '../../components/CommentForm';
import PostDetail from '../../components/ PostDetail';
import { useAuth } from '../../auth';
import Header from '../../components/Header';

export default function Post(props) {
  const router = useRouter();
  const { user } = useAuth();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <PostDetail postId={props.id} />
     {user && <CommentForm  postId={props.id} /> }{/* Pass the slug as a prop */}
      {/* Display existing comments here */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Access the slug from context.params

  return {
    props: {
      id, 
    },
  };
}
