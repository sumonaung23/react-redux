import { useSelector } from 'react-redux'
import { selectPostIds, getPostsStatus, getPostsError } from './postSlice';
import PostsExcerpt from './PostsExcerpt';

import './post.css';

const PostsList = () => {
    const orderPostIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        content = orderPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section className='postList'>
            {content}
        </section>
    )
}

export default PostsList;