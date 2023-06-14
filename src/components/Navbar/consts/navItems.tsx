import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import PreviewIcon from '@mui/icons-material/Preview';
import PersonIcon from '@mui/icons-material/Person';

export const navItems = [
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Home',
        route: 'welcome'

    },
    {
        id: 1,
        icon: <PreviewIcon />,
        label: 'Projects',
        route: 'projects'

    },
    {  
        id: 2,
        icon: <PersonIcon />,
        label: 'About',
        route: 'about'

    },
]