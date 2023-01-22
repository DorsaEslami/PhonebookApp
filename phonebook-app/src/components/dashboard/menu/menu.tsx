import { Menu as AntdMenu, MenuProps } from 'antd';
import { useNavigate } from "react-router";
import { HomeOutlined, ContactsOutlined, PoweroffOutlined, LockOutlined } from '@ant-design/icons';
import ProfileIcon from './profileIcon';
import './menu.css';
import { SelectInfo } from '../../../../node_modules/rc-menu/lib/interface';

/* #region  [- interface -] */
interface Props {
  onClickMenueItem: (info: SelectInfo) => void,
}
/* #endregion */
const Menu = ({ onClickMenueItem }: Props): JSX.Element => {
  const navigate = useNavigate();
  /* #region  [- items -] */
  const items: MenuProps['items'] = [

    {
      label: 'Home',
      key: 'home',
    },
    {
      label: 'Contacts',
      key: 'contacts',
    },
    {
      label: '',
      key: 'Profile',
      icon: <ProfileIcon />,
      className: "profile-span",
      popupClassName: "sub-menu-popup",
      popupOffset: [-165, 5],
      children: [
        {
          label: 'Change Password',
          key: 'change-password',
          icon: <LockOutlined />,
          onClick: () => {
            navigate('/changePassword');
          }
        },
        {
          label: 'Logout',
          key: 'logout',
          icon: <PoweroffOutlined />,
          onClick: () => {
            localStorage.clear();
            navigate('/login');
          }
        },
      ]
    }

  ]
  /* #endregion */

  return (
    <div className="navbar">
      <img className='logo' src='../img/menu-logo.png' alt="loading" />
      <div className="divider"></div>
      <AntdMenu
        className="menu"
        mode="horizontal"
        items={items}
        disabledOverflow={true}
        onSelect={onClickMenueItem}
        selectedKeys={[]}
      >
      </AntdMenu>
    </div >
  )
}
export default Menu;