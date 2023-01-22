import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
interface IProps {
  message: string,
  className?: string,
  placement?: NotificationPlacement | undefined
}
const Notification = ({ message = '', className = '', placement = "bottomRight" }: IProps) => {

  notification.open({
    message: message,
    className: 'login-notification'.concat(' ', className),
    placement: placement,
  });
}
export default Notification;