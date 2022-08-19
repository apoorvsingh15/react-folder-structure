import { useState } from "react";

function Folder({ folderStructure }) {
    const [expand, setExpand] = useState(false);
    if (folderStructure.isFolder) {
        return (
            <div>
                <span onClick={() => setExpand(!expand)}>
                    - {folderStructure.name}
                    <br />
                </span>
                <div style={{ display: expand ? 'block' : 'none', paddingLeft: 10 }}>
                    {folderStructure.items.map((item, index) => <Folder key={index} folderStructure={item} />)}
                </div>
            </div>
        )
    } else {
        return (
            <div style={{ paddingLeft: 10 }}>-{folderStructure.name} <br /></div>
        )
    }
}

export default Folder;
