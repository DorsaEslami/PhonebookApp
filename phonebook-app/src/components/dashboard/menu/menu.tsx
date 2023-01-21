import { Menu as AntdMenu, MenuProps } from 'antd';
import { useNavigate } from "react-router";
import { DownOutlined, PoweroffOutlined } from '@ant-design/icons';
import ProfileIcon from './profileIcon';
import './menu.css';
import Logo from './logo';

const Menu = () => {
  const navigate = useNavigate();
  /* #region  [- items -] */
  const items: MenuProps['items'] = [

    {
      label: 'Dashboard',
      key: 'etelaat-paye',
      icon: <DownOutlined />,
      className: "my-holoo-sub-menu-title",
      popupClassName: "my-holoo-sub-menu-popup",
      popupOffset: [-110, 6],
    },
    {
      label: 'Basic Info',
      key: 'etelaat-paye',
      icon: <DownOutlined />,
      className: "my-holoo-sub-menu-title",
      popupClassName: "my-holoo-sub-menu-popup",
      popupOffset: [-110, 6],
      children: [
        {
          label: 'Contacts',
          key: 'etelaat-paye-sazman',
        },

      ]
    },
    {
      key: 'profail',
      icon: <ProfileIcon />,
      className: "profile-span",
      popupClassName: "my-holoo-sub-menu-popup",
      popupOffset: [-125, 16],
      children: [
        {
          label: 'Logout',
          key: 'khoruj',
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
        //onSelect={onClickMenueItem}
        selectedKeys={[]}
      >
      </AntdMenu>
    </div >
  )
}
export default Menu;