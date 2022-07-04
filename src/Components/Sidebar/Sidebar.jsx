import '../Sidebar/Sidebar.css'
import Icon from '@mui/material/Icon';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ListIcon from '@mui/icons-material/List';

export const Sidebar=()=>{
    return (
        <div className="sidebar-container">
            <Icon className='sidebar-icon'>
            <HomeIcon/>
            </Icon>
            <Icon className='sidebar-icon'>
                <ListIcon/>
            </Icon>
            <Icon className='sidebar-icon'>
                <SettingsIcon/>
            </Icon>
            <Icon className='sidebar-icon'>
                <HelpIcon/>
            </Icon>
        </div>
    )
}