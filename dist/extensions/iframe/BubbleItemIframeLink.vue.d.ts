import { Editor } from '../../tiptap/vue-3';
import { Component } from 'vue';

declare const _default: import('vue').DefineComponent<__VLS_TypePropsToRuntimeProps<{
    editor: Editor;
    isActive: ({ editor }: {
        editor: Editor;
    }) => boolean;
    visible?: ({ editor }: {
        editor: Editor;
    }) => boolean;
    icon?: Component;
    title?: string;
    action?: ({ editor }: {
        editor: Editor;
    }) => void;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    editor: Editor;
    isActive: ({ editor }: {
        editor: Editor;
    }) => boolean;
    visible?: ({ editor }: {
        editor: Editor;
    }) => boolean;
    icon?: Component;
    title?: string;
    action?: ({ editor }: {
        editor: Editor;
    }) => void;
}>>>, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
