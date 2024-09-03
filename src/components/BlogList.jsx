import Container from "./Container";
import blogs from "../data/blog_data.json";
import Section from "./Section";
import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";

const BlogList = () => {
    return (
        <Section>
            <Container>
                <SectionTitle>Blogs</SectionTitle>
            </Container>
            <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {blogs.map((blog, index) => {
                    const { title, image, description } = blog;

                    return (
                        <BlogCard
                            key={index}
                            title={title}
                            image={image}
                            description={description}
                        />
                    );
                })}
            </Container>
        </Section>
    );
};

export default BlogList;
