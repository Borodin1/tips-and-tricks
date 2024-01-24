export enum TagEnum{
    JAVASCRIPT = 'JAVASCRIPT',
    TYPESCRIPT = 'TYPESCRIPT',
    REACT = 'REACT',
    VSCODE = 'VSCODE',
    NEXT_JS = 'NEXT_JS',
    NODE_JS = 'NODE_JS',
    CSS = 'CSS',
    UI_UX = 'UI_UX',
    GRAPHQL = 'GRAPHQL',
    TESTING = 'TESTING',
    NPM = 'NPM',
    GIT = 'GIT',
    TOOLS = 'TOOLS',
    MACOS = 'MACOS',
}

export interface ITagModel {
    id:string;
    name:TagEnum;
}
