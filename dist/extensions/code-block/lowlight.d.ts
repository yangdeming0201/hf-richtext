declare const lowlight: {
    highlight: (language: string, value: string, options?: Readonly<import('lowlight').Options> | null | undefined) => import('node_modules/lowlight/lib').Root;
    highlightAuto: (value: string, options?: Readonly<import('lowlight').AutoOptions> | null | undefined) => import('node_modules/lowlight/lib').Root;
    listLanguages: () => Array<string>;
    register: {
        (grammars: Readonly<Record<string, import('node_modules/lowlight/lib').LanguageFn>>): undefined;
        (name: string, grammar: import('node_modules/lowlight/lib').LanguageFn): undefined;
    };
    registerAlias: {
        (aliases: Readonly<Record<string, ReadonlyArray<string> | string>>): undefined;
        (language: string, alias: ReadonlyArray<string> | string): undefined;
    };
    registered: (aliasOrName: string) => boolean;
};
export default lowlight;
