export interface DropDownComponentProps {
    onChange: (arg: unknown) => void;
    menuList: Array<string>;
    width?: string | React.CSSProperties;
    backgroundColor?: string | React.CSSProperties;
}
