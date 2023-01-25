/* #region  [- contacts -] */
import './contacts.css';
import { Button, Card, Avatar } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from "../../../store/config/configureStore";

const { Meta } = Card;
/* #endregion */


const Contacts = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const contactsList = useAppSelector((state) => state.contact.contactsList);

  /* #region  [- return -] */
  return (
    <div className="contacts-container">
      <div className="header">
        <span className='title'>Contact Management</span>
        <Button type="primary" icon={<PlusOutlined />} />
      </div>
      <div className='content'>
        {contactsList.map((item: any) =>
          <Card
            hoverable
            className='card'
            actions={[
              <EditOutlined key="edit" />,
              <DeleteOutlined key="ellipsis" />,
            ]}
          >
            <Meta avatar={<Avatar alt="profile" src={item.image} size='large' />} title={item.firstName + item.lastName} />
            <div className='description'>
              <p>Phone:{item.phone}</p>
              <p>Email:{item.email}</p>
              <p>Age:{item.age}</p>
              <p>Gender:{item.gender}</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
  /* #endregion */
}
export default Contacts;