import { Editor } from '../../tiptap/vue-3';
import { Component } from 'vue';

declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    editor: Editor;
    isActive?: ({ editor }: {
        editor: Editor;
    }) => boolean;
    visible?: ({ editor }: {
        editor: Editor;
    }) => boolean;
    icon?: Component;
    iconStyle?: string;
    title?: string;
    action?: ({ editor }: {
        editor: Editor;
    }) => Component | void;
}>, {
    isActive: () => false;
    visible: () => true;
    title: undefined;
    action: undefined;
    icon: undefined;
    iconStyle: undefined;
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    editor: Editor;
    isActive?: ({ editor }: {
        editor: Editor;
    }) => boolean;
    visible?: ({ editor }: {
        editor: Editor;
    }) => boolean;
    icon?: Component;
    iconStyle?: string;
    title?: string;
    action?: ({ editor }: {
        editor: Editor;
    }) => Component | void;
}>, {
    isActive: () => false;
    visible: () => true;
    title: undefined;
    action: undefined;
    icon: undefined;
    iconStyle: undefined;
}>>>, {
    isActive: ({ editor }: {
        editor: Editor;
    }) => boolean;
    visible: ({ editor }: {
        editor: Editor;
    }) => boolean;
    icon: Component;
    iconStyle: string;
    title: string;
    action: ({ editor }: {
        editor: Editor;
    }) => Component | void;
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
