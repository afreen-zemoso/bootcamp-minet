import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import MinetTheme from '../../../theme';
import styled from '@emotion/styled';
import TypographyComponent from '../../atoms/Typography';
import { TabsComponentProps } from '../../../utils/interfaces/TabType';
const StyledBox = styled(Box)({
    width: '100%',
    borderBottom: `1px solid ${MinetTheme.palette.grey[100]}`
});
const StyledTab = styled(Tab)({
    padding: `0 ${MinetTheme.spacing(3.5)}`
});
export const TabsComponent = ({ ...props }: TabsComponentProps) => {
    const getTabColor = (index: number) => {
        if (index === props.value) return MinetTheme.palette.primary[500];
        return MinetTheme.palette.text.mediumEmphasis;
    };
    return (
        <>
            <StyledBox data-testid="tabs">
                <Tabs
                    value={props.value}
                    onChange={props.handleChange}
                    aria-label="wrapped label tabs example"
                >
                    {props.tabs.map((tab) => (
                        <StyledTab
                            key={tab.index}
                            value={tab.value}
                            label={
                                <TypographyComponent
                                    variant="subtitle2"
                                    color={getTabColor(tab.index)}
                                >
                                    {tab.label}
                                </TypographyComponent>
                            }
                        />
                    ))}
                </Tabs>
            </StyledBox>
        </>
    );
};
