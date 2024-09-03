const Container = (props) => {
    const { children, className } = props;

    return <div className={`w-4/5 mx-auto ${className}`}>{children}</div>;
};

export default Container;
