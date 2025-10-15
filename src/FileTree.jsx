function FileTree({ node: x }) {
    if (x.type === "folder") {
        return (
            <>
                <p>{x.name}, {x.type}</p>
                {x.children.map(y => (
                    <FileTree key={y.name} node={y} />
                ))}
            </>
        );
    } else {
        return <p>{x.name}, {x.type}</p>
    }
}

export default FileTree;