import FileTree from "./FileTree";

function FileExplorer({ fileSystem }) {
    return (
        <>
            <FileTree node={fileSystem} />
        </>
    );
}

export default FileExplorer;