/* #region  [- import -] */
import './contacts.css';
import { Button, Card, Avatar, Input, Drawer, Modal, Form, InputNumber, Radio } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from "../../../store/config/configureStore";
import { useState } from 'react';
import { getContact, getFilteredContacts, } from '../../../store/reducers/contactAction';
import { Users } from '../../../dtos/contactOutputDTO';
import Notification from "../../shared/components/notification";
import { ContactPostInputDTO } from '../../../dtos/contactPostInputDTO';
import { ContactPutInputDTO } from '../../../dtos/ContactPutInputDTO';
import { IContactService } from "../../../services/interfaces/IContactService";
import container, { TYPES } from "../../../inversify.config";
import { ContactDeleteOutputDTO } from '../../../dtos/contactDeleteOutputDTO';
const { Meta } = Card;
const { Search } = Input;
/* #endregion */


const Contacts = (): JSX.Element => {

  /* #region  [- variable -] */
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const contactsList = useAppSelector<Users[]>((state) => state.contact.contactsList);
  const [id, setId] = useState<number | undefined>(undefined);
  const [fullName, setFullName] = useState<string>('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isInformModalOpen, setIsInformModalOpen] = useState<boolean>(false);
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  interface FormValues {
    contact: {
      firstName: string;
      lastName: string;
      phone: number;
      email: string;
      age: number;
      gender: string;
    }
  }
  /* #endregion */

  /* #region  [- onSearch -] */
  const onSearch = (value: string): void => {
    if (value === '') {
      dispatch(getContact());
    }
    else {
      dispatch(getFilteredContacts(value));
    }
  }
  /* #endregion */

  /* #region  [- onClickDeleteButton -] */
  const onClickDeleteButton = async (item: Users) => {
    let fullName = item.firstName + ' ' + item.lastName;
    setIsDeleteModalOpen(true);
    setId(item.id);
    setFullName(fullName);
  }
  /* #endregion */

  /* #region  [- onClickDeleteButtonInModal -] */
  const onClickDeleteButtonInModal = async () => {
    if (id !== undefined) {
      const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
      var response: ContactDeleteOutputDTO = await contactService.deleteContact(id);
      if (response.isDeleted) {
        Notification({ message: 'Deleted successfully', type: 'success' });
        setId(undefined);
        setFullName('');
        setIsDeleteModalOpen(false);
      }
      else {
        Notification({ message: 'Something went wrong', type: 'error' });
      }

    }
  }
  /* #endregion */

  /* #region  [- postContactOnFinish -] */
  const postContactOnFinish = async ({ contact }: FormValues) => {
    var data: ContactPostInputDTO = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      age: contact.age,
      gender: contact.gender,
      phone: contact.phone,
      email: contact.email,
    }
    const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
    var response: Users = await contactService.postContact(data);
    if (response) {
      Notification({ message: 'Added successfully', type: 'success' });
      setIsDrawerOpen(false);
      setIsInformModalOpen(true);
      form.resetFields();
    }
    else {
      Notification({ message: 'Something went wrong', type: 'error' });
    }
  }
  /* #endregion */

  /* #region  [- putContactOnFinish -] */
  const putContactOnFinish = async ({ contact }: FormValues) => {
    var data: ContactPutInputDTO = {
      id: id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      age: contact.age,
      gender: contact.gender,
      phone: contact.phone,
      email: contact.email,
    }
    const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
    var response: Users = await contactService.putContact(data);
    if (response) {
      Notification({ message: 'Edited successfully', type: 'success' });
      setId(undefined);
      setIsDrawerOpen(false);
      setIsInformModalOpen(true);
      form.resetFields();
    }
    else {
      Notification({ message: 'Something went wrong', type: 'error' });
    }
  }
  /* #endregion */

  /* #region  [- onFinish -] */
  const onFinish = async (formValues: FormValues) => {
    if (id === undefined) {
      postContactOnFinish(formValues);
    }
    else {
      putContactOnFinish(formValues);
    }

  };
  /* #endregion */

  /* #region  [- onClickEditButton -] */
  const onClickEditButton = async (item: Users) => {
    setIsDrawerOpen(true);
    setId(item.id);
    form.setFieldsValue({
      contact: {
        firstName: item.firstName,
        lastName: item.lastName,
        phone: item.phone,
        email: item.email,
        age: item.age,
        gender: item.gender === 'male' ? 'Male' : 'Female',
      }

    });

  }
  /* #endregion */

  /* #region  [- onCloseDrawer -] */
  const onCloseDrawer = () => {
    setId(undefined);
    setIsDrawerOpen(false);
    form.resetFields();
  }
  /* #endregion */

  /* #region  [- onCloseDeleteModal -] */
  const onCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setId(undefined);
    setFullName('');
  }
  /* #endregion */

  /* #region  [- return -] */
  return (
    <div className="contacts-container">
      <div className="header">

        <span className='title'>Contact Management</span>

        <div className='tool'>
          <Search className='search-input' placeholder="type first name or last name" onSearch={onSearch} enterButton />
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsDrawerOpen(true)} />
          <Drawer
            title={id === undefined ? "Create a new contact" : "Edit Contact"}
            width={720}
            onClose={onCloseDrawer}
            open={isDrawerOpen}
            destroyOnClose={true}
            rootClassName='contact-drawer'
          >
            <Form
              wrapperCol={{ span: 19 }}
              labelCol={{ span: 5 }}
              form={form}
              name="form"
              onFinish={onFinish}
              className='contact-form'
              validateMessages={validateMessages}
            >
              <div className='form-content'>
                <Form.Item name={['contact', 'firstName']} label="First Name" rules={[{ required: true }]} hasFeedback>
                  <Input />
                </Form.Item>
                <Form.Item name={['contact', 'lastName']} label="Last Name" rules={[{ required: true }]} hasFeedback>
                  <Input />
                </Form.Item>
                <Form.Item name={['contact', 'phone']} label="Phone" rules={[{ required: true }]} hasFeedback>
                  <Input />
                </Form.Item>
                <Form.Item name={['contact', 'email']} label="Email" rules={[{ required: true }, { type: 'email' }]} hasFeedback>
                  <Input />
                </Form.Item>
                <Form.Item name={['contact', 'age']} label="Age" rules={[{ required: true }, { type: 'number', min: 0, max: 99 }]} hasFeedback>
                  <InputNumber />
                </Form.Item>
                <Form.Item name={['contact', 'gender']} label="Gender" initialValue="Male">
                  <Radio.Group value="Male">
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <Form.Item className='submit-button-form-item' wrapperCol={{ span: 24 }}>
                <Button type="primary" className='cancel-button' onClick={onCloseDrawer} >
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit" className='submit-button' >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Drawer>
          <Modal
            open={isInformModalOpen}
            onCancel={() => { setIsInformModalOpen(false) }}
            destroyOnClose={true}
            className='inform-modal'
            centered
            footer={[
              <Button type='primary' size='large' className='button' key='informModalNoButton' onClick={() => setIsInformModalOpen(false)}>Ok</Button>
            ]} >
            <p>Please note:</p>
            <p>'Dummyjson' is a fake data provider I used in this project.</p>
            <p>'Adding' or 'Editing' a contact will not add/edit into 'https://dummyjson.com/' server.</p>
            <p>Therefore, you won't be able to see any changes in contacts list.</p>
            <p>However, based on the notification you see on the bottom rigth side of the page you will be able to check if the process has been successfull or not.</p>
          </Modal>
        </div>

      </div>
      <div className='content'>
        {contactsList.map((item: Users) =>
          <Card
            key={item.id}
            hoverable
            className='card'
            actions={[
              <EditOutlined key={'edit' + item.id} id={String(item.id)} onClick={() => onClickEditButton(item)} />,
              <DeleteOutlined key={'delete' + item.id} id={String(item.id)} onClick={() => onClickDeleteButton(item)} />,
            ]}
          >
            <Meta avatar={<Avatar alt="profile" src={item.image} size='large' />} title={item.firstName + ' ' + item.lastName} />
            <div className='description'>
              <p>Phone:{' ' + item.phone}</p>
              <p>Email:{' ' + item.email}</p>
              <p>Age:{' ' + item.age}</p>
              <p>Gender:{' ' + (item.gender === 'male' ? 'Male' : 'Female')}</p>
            </div>
          </Card>
        )}
        <Modal
          open={isDeleteModalOpen}
          onCancel={onCloseDeleteModal}
          destroyOnClose={true}
          className='delete-modal'
          centered
          footer={[
            <Button type='primary' size='large' className='button' key='deleteModalYesButton' onClick={onClickDeleteButtonInModal}>Yes</Button>,
            <Button type='primary' size='large' className='button' key='deleteModalNoButton' onClick={onCloseDeleteModal}>No</Button>
          ]} >
          <p>Are you sure you want to delete contact: {fullName}?</p>
          <p>Please note:</p>
          <p>Deleting a contact will not delete it into 'https://dummyjson.com/' server.</p>
          <p>'Dummyjson' is a fake data provider I used in this project.</p>
          <p>Therefore, you still will be able to see the deleted contact in contacts list.</p>
          <p>However, based on the notification you see on the bottom rigth side of the page you will be able to check if deleting has been successfull or not.</p>
        </Modal>
      </div>
    </div>
  )
  /* #endregion */
}
export default Contacts;