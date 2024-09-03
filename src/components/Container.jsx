const Container = (props) => {
    const { children } = props;

    return <div className="w-4/5 bg-red-700">{children}</div>;
};

export default Container;
