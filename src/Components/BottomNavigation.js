import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { lightGreen } from '@material-ui/core/colors';
import "./BottomNavigation.css"



// const myStyle = {
//     palette: {
//         secondary: {
//             main: '#00FFBF'
//         }
//     }
// }

export default function LabelBottomNavigation() {

    const [value, setValue] = React.useState('recents');



    return (
        <div >
            <BottomNavigation value={value} className="root">
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
            </BottomNavigation>
        </div>
    );
}