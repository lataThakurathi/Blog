const BlogCard = (props) => {
    const { title, image, description } = props;

    return (
        <div className="rounded-lg bg-white shadow overflow-hidden flex flex-col relative">
            <img src={image} className="h-36 w-full object-cover" alt={title} />
            <div className="p-4 flex flex-col grow">
                <h3 className="text-lg leading-tight text-gray-900 font-bold mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 mb-auto">{description}</p>

                <a
                    className="mt-4 bg-primary-500 rounded-full text-white px-4 h-8 flex items-center self-start hover:bg-primary-700 shadow active:scale-95 active:shadow-none"
                    href="#">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
