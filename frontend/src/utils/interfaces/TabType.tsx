export interface TabPanelProps {
    label?: string;
    children?: React.ReactNode;
    index: number;
    value?: number;
}
export interface TabsComponentProps {
    value: number;
    tabs: TabPanelProps[];
    handleChange?: (event: React.SyntheticEvent, newValue: number) => void;
}
