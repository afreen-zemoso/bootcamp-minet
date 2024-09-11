import { Grid, styled } from '@mui/material';
import Navbar from '../../molecules/Navbar';
import Header from '../../molecules/Header';
import Footer from '../../molecules/Footer';
import MinetTheme from '../../../theme';
import { footerItems } from '../../../utils/constants';
import { MainTemplateProps } from '../../../utils/interfaces/MainTemplate';
const MainTemplate = ({ ...props }: MainTemplateProps) => {
    const boxHeight = 100 - props.navHeight;
    const StyledNavBar = styled(Grid)({
        '& .styleNavbar': {
            height: `${props.navHeight}%`,
            background: 'white',
            position: 'sticky',
            top: 0
        },
        '& .styleBox': {
            height: `${boxHeight}%`,
            borderRight: `1px solid ${MinetTheme.palette.grey[100]}`,
            background: MinetTheme.palette.primary[100]
        }
    });
    const styledBody = {
        background: MinetTheme.palette.primary[100],
        minHeight: MinetTheme.spacing(182)
    };
    const StyledHeader = styled(Grid)({
        position: 'sticky',
        top: 0,
        zIndex: 1
    });
    return (
        <>
            <Grid container data-testid="mainTemplate" wrap="nowrap">
                <StyledNavBar item>
                    <div className="styleNavbar">
                        <Navbar active={props.activeDashboard} />
                    </div>
                    <div className="styleBox" />
                </StyledNavBar>
                <Grid item flexGrow={1}>
                    <div>
                        <Grid container direction="column">
                            <StyledHeader item>
                                <>
                                    <Header
                                        text={props.headerText}
                                        purchase={props.purchase}
                                        onClickBuy={props.onClickBuy}
                                        onClickSell={props.onClickSell}
                                    />
                                </>
                            </StyledHeader>
                            <div style={styledBody}>{props.body}</div>
                            <Grid item>
                                <Footer menuItems={footerItems} />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default MainTemplate;
