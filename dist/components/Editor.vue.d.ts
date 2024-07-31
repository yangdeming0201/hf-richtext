import { Editor } from '../tiptap/vue-3';
import { CSSProperties, PropType } from 'vue';

declare function __VLS_template(): {
    content?(_: {}): any;
    extra?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<{
    editor: {
        type: PropType<Editor>;
        required: true;
    };
    contentStyles: {
        type: PropType<CSSProperties>;
        required: false;
        default: () => {};
    };
    locale: {
        type: PropType<"zh-CN" | "en" | "zh" | "en-US">;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    editor: {
        type: PropType<Editor>;
        required: true;
    };
    contentStyles: {
        type: PropType<CSSProperties>;
        required: false;
        default: () => {};
    };
    locale: {
        type: PropType<"zh-CN" | "en" | "zh" | "en-US">;
        required: false;
        default: string;
    };
}>>, {
    locale: "en" | "zh-CN" | "zh" | "en-US";
    contentStyles: CSSProperties;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
