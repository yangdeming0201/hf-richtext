import { LanguageSupport, StreamLanguage } from '@codemirror/language';
import { EditorStateConfig } from '@codemirror/state';

declare const presetLanguages: {
    yaml: StreamLanguage<unknown>;
    html: LanguageSupport;
    javascript: LanguageSupport;
    css: LanguageSupport;
    json: LanguageSupport;
};
declare const _default: import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string;
    height?: string;
    language: keyof typeof presetLanguages | LanguageSupport;
    extensions?: EditorStateConfig["extensions"];
}>, {
    modelValue: string;
    height: string;
    language: string;
    extensions: () => never[];
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    change: (value: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: string;
    height?: string;
    language: keyof typeof presetLanguages | LanguageSupport;
    extensions?: EditorStateConfig["extensions"];
}>, {
    modelValue: string;
    height: string;
    language: string;
    extensions: () => never[];
}>>> & {
    onChange?: ((value: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    height: string;
    extensions: import('@codemirror/state').Extension;
    modelValue: string;
    language: keyof typeof presetLanguages | LanguageSupport;
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
