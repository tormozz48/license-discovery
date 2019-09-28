discovery.page.define('default', [
    'h1:#.name',
    {
        view: 'inline-list',
        item: 'indicator',
        data: `[
            { label: 'All Deps', value: size() },
            { label: 'Production Deps', value: .[dependencyLevel = "production"].size() },
            { label: 'Development Deps', value: .[dependencyLevel != "production"].size() }
        ]`
    },
    {
        view: 'content-filter',
        content: {
            view: 'table',
            data: '.[name.[no #.filter or $~=#.filter]]',
            cols: [
                {header: 'Name', content: 'text:name'},
                {header: 'Version', content: 'badge:version'},
                {header: 'License', content: 'text:license'},
                {header: 'Home Page', content: 'link:homepage'},
                {header: 'Dependency Level', content: 'text:dependencyLevel'}
            ]
        }
    }
]);