import { Box, Grid, Link, Tooltip, styled } from '@mui/material';
import Image from '../../atoms/Image';
import Logo from '../../../../public/assets/images/logo.svg';
import DashboardActive from '../../../../public/assets/images/dashboard.svg';
import Analytics from '../../../../public/assets/images/portfolio.svg';
import Trades from '../../../../public/assets/images/trade.svg';
import Notification from '../../../../public/assets/images/notification.svg';
import LogOut from '../../../../public/assets/images/logout.svg';
import unactive from '../../../../public/assets/images/unActiveDashboard.svg';
import theme from '../../../theme';
import { IconProps, NavBarProps } from '../../../utils/interfaces/Navbar';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../redux/user/userreducer';
const StyledBox = styled(Box)({
    background: 'white',
    padding: theme.spacing(6),
    maxWidth: theme.spacing(20),
    '& .link': {
        textDecoration: 'none'
    }
});
export const iconsList: IconProps[] = [
    {
        default: DashboardActive,
        alt: 'Dashboard',
        url: '/dashboard',
        Tooltip: 'dashboard'
    },
    { default: Analytics, alt: 'Analytics', Tooltip: 'portfolio' },
    { default: Trades, alt: 'Trades', Tooltip: 'trade' },
    { default: Notification, alt: 'Notification', Tooltip: 'notification' },
    { default: LogOut, alt: 'Log Out', url: '/', Tooltip: 'logout' }
];
const Navbar = ({ active }: NavBarProps) => {
    const getNavItem = (icon: IconProps) => {
        if (icon.alt === 'Dashboard' && active === false) return unactive;
        return icon.default;
    };
    const dispatch = useDispatch();
    const handleClick = (icon: string) => {
        if (icon === 'Log Out') {
            dispatch(userActions.logoutUser());
        }
    };

    return (
        <StyledBox data-testid="sideNav">
            <Grid container direction="column" rowGap={11} alignItems="center">
                <Grid item>
                    <Image src={Logo} alt={'image'} />
                </Grid>
                {iconsList.map((icon) => (
                    <Grid item key={icon.alt}>
                        <Tooltip title={icon.Tooltip}>
                            <Link
                                href={icon.url}
                                className="link"
                                onClick={() => handleClick(icon.alt)}
                            >
                                <img src={getNavItem(icon)} alt={icon.alt} />
                            </Link>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </StyledBox>
    );
};
export default Navbar;
