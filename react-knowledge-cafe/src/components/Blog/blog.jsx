import PropTypes from 'prop-types'; 
const Blog = ({blog}) => {
    const {title, cover, author, author_img, posted_date, hashtags, reading_time} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between m-2'>
                <div className='flex'>
                    <img className='w-9' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xs'>{author}</h3>
                        <p className='text-xs'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-xs'>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-xl'>{title}</h2>
            <p>
                {
                    hashtags.map(hash => <span><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;