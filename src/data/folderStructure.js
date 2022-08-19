const folderStructure = {
    name: 'root',
    isFolder: true,
    items: [
        {
            name: 'src',
            isFolder: true,
            items: [
                {
                    name: 'components',
                    isFolder: true,
                    items: [
                        {
                            name: 'header',
                            isFolder: true,
                            items: [
                                {
                                    name: 'title.js',
                                    isFolder: false,
                                },
                                {
                                    name: 'logo.js',
                                    isFolder: false,
                                }
                            ]
                        },

                        {
                            name: 'Button.js',
                            isFolder: false,
                        },
                        {
                            name: 'DropDown.js',
                            isFolder: false,
                        }
                    ]
                },
                {
                    name: 'containers',
                    isFolder: true,
                    items: [
                        {
                            name: 'LandingPage.js',
                            isFolder: false,
                        },
                        {
                            name: 'UserProfile.js',
                            isFolder: false,
                        }
                    ]
                }
            ]
        },
        {
            name: 'package.json',
            isFolder: false,
        },
    ]
}

export default folderStructure