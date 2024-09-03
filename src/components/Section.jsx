const Section = (props) => {
    const { children, className } = props;

    return <section className={`py-16 ${className}`}>{children}</section>;
};

export default Section;
