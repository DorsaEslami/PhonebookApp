/* #region  [- import -] */
import { notification } from "antd";
import { IconType, NotificationPlacement } from "antd/es/notification/interface";
import './notification.css';
import { CheckOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { ReactNode, useEffect, } from "react";

/* #endregion */

interface IProps {
  message: string,
  className?: string,
  placement?: NotificationPlacement | undefined,
  type?: IconType | undefined
}
const Notification = ({ message = '', className = '', placement = "bottomRight", type = 'success' }: IProps) => {

  const openNotification = (icon: ReactNode) => {
    notification.open({
      message: message,
      className: 'notification'.concat(' ', className),
      placement: placement,
      type: type,
      icon: icon,
    });
  };

  const findIcon = () => {
    switch (type) {
      case 'success':
        openNotification(<CheckOutlined />);
        break;
      case 'error':
        openNotification(<ExclamationCircleOutlined />);
        break;
      default:
        openNotification(<CheckOutlined />);
    }
  }

  return (findIcon())

}
export default Notification;