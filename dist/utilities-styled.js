module.exports = {
    ".alert-sm": { padding: ".5rem" },
    ".alert-info": {
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--inc,var(--nc)) / var(--tw-text-opacity))",
    },
    ".alert-success": {
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--suc,var(--nc)) / var(--tw-text-opacity))",
    },
    ".alert-warning": {
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--wac,var(--nc)) / var(--tw-text-opacity))",
    },
    ".alert-error": {
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--erc,var(--nc)) / var(--tw-text-opacity))",
    },
    ".artboard-demo": {
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--b1) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--bc) / var(--tw-text-opacity))",
        borderRadius: "var(--rounded-box,1rem)",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)",
    },
    ".avatar.online:before": {
        content: '""',
        position: "absolute",
        zIndex: "10",
        display: "block",
        borderRadius: "9999px",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--su) / var(--tw-bg-opacity))",
        width: "15%",
        height: "15%",
        top: "7%",
        right: "7%",
        boxShadow: "0 0 0 2px hsl(var(--b1))",
    },
    ".avatar.offline:before": {
        content: '""',
        position: "absolute",
        zIndex: "10",
        display: "block",
        borderRadius: "9999px",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--b3,var(--b2)) / var(--tw-bg-opacity))",
        width: "15%",
        height: "15%",
        top: "7%",
        right: "7%",
        boxShadow: "0 0 0 2px hsl(var(--b1))",
    },
    ".badge-primary": {
        "-TwBorderOpacity": "1",
        borderColor: "hsl(var(--p) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--p) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--pc) / var(--tw-text-opacity))",
    },
    ".badge-secondary": {
        "-TwBorderOpacity": "1",
        borderColor: "hsl(var(--s) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--s) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--sc) / var(--tw-text-opacity))",
    },
    ".badge-accent": {
        "-TwBorderOpacity": "1",
        borderColor: "hsl(var(--a) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--a) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--ac) / var(--tw-text-opacity))",
    },
    ".badge-ghost": {
        "-TwBorderOpacity": "1",
        borderColor: "hsl(var(--b2,var(--b1)) / var(--tw-border-opacity))",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--b2,var(--b1)) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--bc) / var(--tw-text-opacity))",
    },
    ".badge-outline": {
        borderColor: "currentColor",
        "-TwBorderOpacity": "0.5",
        backgroundColor: "transparent",
        "-TwTextOpacity": "1",
        color: "hsl(var(--bc) / var(--tw-text-opacity))",
    },
    ".badge-outline.badge-primary": {
        "-TwTextOpacity": "1",
        color: "hsl(var(--p) / var(--tw-text-opacity))",
    },
    ".badge-outline.badge-secondary": {
        "-TwTextOpacity": "1",
        color: "hsl(var(--s) / var(--tw-text-opacity))",
    },
    ".badge-outline.badge-accent": {
        "-TwTextOpacity": "1",
        color: "hsl(var(--a) / var(--tw-text-opacity))",
    },
    ".badge-info": {
        borderColor: "transparent",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--in) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--inc,var(--nc)) / var(--tw-text-opacity))",
    },
    ".badge-success": {
        borderColor: "transparent",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--su) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--suc,var(--nc)) / var(--tw-text-opacity))",
    },
    ".badge-warning": {
        borderColor: "transparent",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--wa) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--wac,var(--nc)) / var(--tw-text-opacity))",
    },
    ".badge-error": {
        borderColor: "transparent",
        "-TwBgOpacity": "1",
        backgroundColor: "hsl(var(--er) / var(--tw-bg-opacity))",
        "-TwTextOpacity": "1",
        color: "hsl(var(--erc,var(--nc)) / var(--tw-text-opacity))",
    },
    ".card-compact .card-body": {
        padding: "1rem",
        fontSize: ".875rem",
        lineHeight: "1.25rem",
    },
    ".card-compact .card-title": { marginBottom: ".25rem" },
    ".card-normal .card-body": {
        padding: "var(--padding-card,2rem)",
        fontSize: "1rem",
        lineHeight: "1.5rem",
    },
    ".card-normal .card-title": { marginBottom: ".75rem" },
    ".divider-horizontal": {
        marginTop: "0",
        marginBottom: "0",
        marginLeft: "1rem",
        marginRight: "1rem",
        height: "auto",
        width: "1rem",
    },
    ".divider-vertical": {
        marginLeft: "0",
        marginRight: "0",
        marginTop: "1rem",
        marginBottom: "1rem",
        height: "1rem",
        width: "auto",
    },
    ".menu-vertical :where(li.bordered>*)": {
        borderLeftWidth: "4px",
        borderBottomWidth: "0",
    },
    ".menu-horizontal :where(li.bordered>*)": {
        borderLeftWidth: "0",
        borderBottomWidth: "4px",
    },
    ".menu-normal :where(li>*)": {
        paddingTop: ".75rem",
        paddingBottom: ".75rem",
        fontSize: "1rem",
        lineHeight: "1.5rem",
    },
    ".menu-compact :where(li>*)": {
        paddingTop: ".5rem",
        paddingBottom: ".5rem",
        fontSize: ".875rem",
        lineHeight: "1.25rem",
    },
    ".menu-vertical>:where(li:first-child)": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        borderBottomRightRadius: "unset",
        borderBottomLeftRadius: "unset",
    },
    ".menu-vertical>:where(li:first-child)>:where(:not(ul))": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
        borderBottomRightRadius: "unset",
        borderBottomLeftRadius: "unset",
    },
    ".menu-vertical>:where(li:last-child)": {
        borderTopLeftRadius: "unset",
        borderTopRightRadius: "unset",
        borderBottomRightRadius: "inherit",
        borderBottomLeftRadius: "inherit",
    },
    ".menu-vertical>:where(li:last-child)>:where(:not(ul))": {
        borderTopLeftRadius: "unset",
        borderTopRightRadius: "unset",
        borderBottomRightRadius: "inherit",
        borderBottomLeftRadius: "inherit",
    },
    ".menu-horizontal>:where(li:first-child)": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "unset",
        borderBottomRightRadius: "unset",
        borderBottomLeftRadius: "inherit",
    },
    ".menu-horizontal>:where(li:first-child)>:where(:not(ul))": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "unset",
        borderBottomRightRadius: "unset",
        borderBottomLeftRadius: "inherit",
    },
    ".menu-horizontal>:where(li:last-child)": {
        borderTopLeftRadius: "unset",
        borderTopRightRadius: "inherit",
        borderBottomRightRadius: "inherit",
        borderBottomLeftRadius: "unset",
    },
    ".menu-horizontal>:where(li:last-child)>:where(:not(ul))": {
        borderTopLeftRadius: "unset",
        borderTopRightRadius: "inherit",
        borderBottomRightRadius: "inherit",
        borderBottomLeftRadius: "unset",
    },
    ".stats-horizontal>:not([hidden])~:not([hidden])": {
        "-TwDivideXReverse": "0",
        borderRightWidth: "calc(1px * var(--tw-divide-x-reverse))",
        borderLeftWidth: "calc(1px * calc(1 - var(--tw-divide-x-reverse)))",
        "-TwDivideYReverse": "0",
        borderTopWidth: "calc(0px * calc(1 - var(--tw-divide-y-reverse)))",
        borderBottomWidth: "calc(0px * var(--tw-divide-y-reverse))",
    },
    ".stats-horizontal": { overflowX: "auto" },
    ".stats-vertical>:not([hidden])~:not([hidden])": {
        "-TwDivideYReverse": "0",
        borderTopWidth: "calc(1px * calc(1 - var(--tw-divide-y-reverse)))",
        borderBottomWidth: "calc(1px * var(--tw-divide-y-reverse))",
        "-TwDivideXReverse": "0",
        borderRightWidth: "calc(0px * var(--tw-divide-x-reverse))",
        borderLeftWidth: "calc(0px * calc(1 - var(--tw-divide-x-reverse)))",
    },
    ".stats-vertical": { overflowY: "auto" },
    ".steps-horizontal .step": {
        gridTemplateRows: "40px 1fr",
        gridTemplateColumns: "auto",
        minWidth: "4rem",
    },
    ".steps-horizontal .step:before": {
        height: ".5rem",
        width: "100%",
        "-TwTranslateY": "0px",
        "-TwTranslateX": "0px",
        transform:
            "translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        content: '""',
        marginLeft: "-100%",
    },
    ".steps-vertical .step": {
        gap: ".5rem",
        gridTemplateColumns: "40px 1fr",
        gridTemplateRows: "auto",
        minHeight: "4rem",
        justifyItems: "start",
    },
    ".steps-vertical .step:before": {
        height: "100%",
        width: ".5rem",
        "-TwTranslateY": "-50%",
        "-TwTranslateX": "-50%",
        transform:
            "translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        marginLeft: "50%",
    },
    ".table-normal :where(th,td)": {
        padding: "1rem",
        fontSize: "1rem",
        lineHeight: "1.5rem",
    },
    ".table-compact :where(th,td)": {
        padding: ".5rem",
        fontSize: ".875rem",
        lineHeight: "1.25rem",
    },
};
