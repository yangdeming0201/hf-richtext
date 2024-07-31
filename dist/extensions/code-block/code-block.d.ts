import { CodeBlockLowlightOptions } from '@tiptap/extension-code-block-lowlight';

export interface CustomCodeBlockLowlightOptions extends CodeBlockLowlightOptions {
    lowlight: any;
    defaultLanguage: string | null | undefined;
}
declare module "@/tiptap" {
    interface Commands<ReturnType> {
        codeIndent: {
            codeIndent: () => ReturnType;
            codeOutdent: () => ReturnType;
        };
    }
}
declare const _default: import('../../tiptap/vue-3').Node<CustomCodeBlockLowlightOptions & CodeBlockLowlightOptions, any>;
export default _default;
