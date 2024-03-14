import PropTypes from 'prop-types';

const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
    const {title,cover,author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='space-y-4'>
            <img src={cover} alt={`cover picture of title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                      <div className='ml-6'>
                           <h3 className='text-2xl'>{author}</h3>
                           <p>{posted_date}</p>
                      </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddBookmark(blog)}>more</button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button 
            onClick={() =>handleMarkAsRead(reading_time)}
            className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func       
    }

export default Blog;