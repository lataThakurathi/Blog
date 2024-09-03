const SectionTitle = (props) => {
    const { children, defaultBottomMargin = true } = props;
    return (
        <h2
            className={`${
                defaultBottomMargin ? "mb-8" : ""
            } text-4xl font-light`}>
            {children}
        </h2>
    );
};

export default SectionTitle;
