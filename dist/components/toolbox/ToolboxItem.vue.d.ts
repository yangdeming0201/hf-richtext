import { Editor } from '../../tiptap/vue-3';
import { Component } from 'vue';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    editor?: Editor;
    title?: string;
    description?: string;
    action?: () => void;
    icon?: Component;
}>, {
    editor: undefined;
    title: undefined;
    description: undefined;
    action: undefined;
    icon: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    editor?: Editor;
    title?: string;
    description?: string;
    action?: () => void;
    icon?: Component;
}>, {
    editor: undefined;
    title: undefined;
    description: undefined;
    action: undefined;
    icon: undefined;
}>>>, {
    editor: Editor;
    icon: Component;
    title: string;
    action: () => void;
    description: string;
}, {}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
