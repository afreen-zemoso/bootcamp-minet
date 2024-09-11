import { Box, styled } from '@mui/material';
import Chart from 'react-apexcharts';
import { categories } from '../../../utils/constants';
import theme from '../../../../src/theme';

export interface Props {
    series?: {
        name?: string;
        data: number[];
    }[];
    height?: string;
    width?: string;
    colors?: string[];
    opacity?: number;
    id?: string;
    labelVisible?: boolean;
    gridVisible?: boolean;
}
interface GraphProps {
    options: ApexCharts.ApexOptions;
}
export const Graph = (props: Props) => {
    const graphDef: GraphProps = {
        options: {
            colors: props.colors,
            chart: {
                id: props.id,
                toolbar: {
                    show: false
                },
                offsetY: -20
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                colors: props.colors,
                type: 'SOLID',
                opacity: props.opacity
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right'
            },
            stroke: {
                width: 2
            },
            xaxis: {
                labels: {
                    show: props.labelVisible,
                    style: {
                        colors: theme.palette.text.lowEmphasis
                    }
                },
                categories: categories,
                tickPlacement: 'none',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },

            yaxis: {
                show: false
            },
            tooltip: {
                enabled: false
            },
            grid: {
                show: props.gridVisible
            }
        }
    };

    const CustomBox = styled(Box)(({ theme }) => ({
        '& > *': {
            minHeight: '0px !important'
        },
        '& .apexcharts-svg': {
            position: 'relative',
            top: theme.spacing(5)
        }
    }));

    return (
        <CustomBox data-testid="area-graph">
            <Chart
                options={graphDef.options}
                series={props.series}
                width={props.width}
                height={props.height}
                type="area"
            />
        </CustomBox>
    );
};
