/* #region  [- import -] */
import { Pie, Column } from '@ant-design/plots';
import { useEffect } from 'react';
import { getContact } from '../../../store/reducers/contactAction';
import { useAppSelector, useAppDispatch } from "../../../store/config/configureStore";
import { Col, Row, Card } from 'antd';
import './defaultContent.css';
import { Users } from '../../../dtos/contactOutputDTO';
/* #endregion */

const DefaultContent = (): JSX.Element => {

  /* #region  [- variables -] */
  type percentType = any
  const dispatch = useAppDispatch();
  const contactsList = useAppSelector<Users[]>((state) => state.contact.contactsList);
  /* #endregion */

  /* #region  [- getContact -] */
  useEffect(() => {
    dispatch(getContact())
  }, [])
  /* #endregion */

  /* #region  [- pieChartData -] */
  const pieChartData = [
    {
      type: 'Female',
      value: Number(((contactsList.filter((item: any) => item.gender === 'female').length / contactsList.length) * 100).toFixed(2))
    },
    {
      type: 'Male',
      value: Number(((contactsList.filter((item: any) => item.gender === 'male').length / contactsList.length) * 100).toFixed(2))
    },
  ];
  /* #endregion */

  /* #region  [- pieChartConfig -] */
  const pieChartConfig = {
    appendPadding: 10,
    data: pieChartData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }: percentType) => `${(percent * 100).toFixed(2)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  /* #endregion */

  /* #region  [- columnChartData -] */
  const columnChartData = [
    {
      age: 'Age<20',
      value: contactsList.filter((item: any) => item.age < 20).length,
    },
    {
      age: '20<=Age<30',
      value: contactsList.filter((item: any) => item.age >= 20 && item.age < 30).length,
    },
    {
      age: '30<=Age<40',
      value: contactsList.filter((item: any) => item.age >= 30 && item.age < 40).length,
    },
    {
      age: '40<=Age<50',
      value: contactsList.filter((item: any) => item.age >= 40 && item.age < 50).length,
    },
    {
      age: 'Age>=50',
      value: contactsList.filter((item: any) => item.age >= 50).length,
    },

  ];
  /* #endregion */

  /* #region  [- columnChartConfig -] */
  const columnChartConfig = {
    data: columnChartData,
    xField: 'age',
    yField: 'value',
    color: '#FFBF00',
    label: {
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      age: {
        alias: 'Age',
      },
      value: {
        alias: 'Total Count',
      },
    },
  };
  /* #endregion */

  /* #region  [- return -] */
  return (
    <Row className='default-content'>
      <Col className='column-chart-col' md={24} lg={12} xl={12} xxl={12}>
        <Column {...columnChartConfig} className='column-chart' />
      </Col>
      <Col className='pie-chart-col' md={24} lg={12} xl={12} xxl={12}>
        <Pie  {...pieChartConfig} className='pie-chart' />
        <Card title="Report View" className='description-card'>
          <p>Lorem ipsum dolor sit amet. Sed illo voluptatem rem ipsa excepturi aut amet fugit ut sint asperiores ut dolorem nisi ut reiciendis reiciendis quo porro earum. Et blanditiis assumenda et vitae accusantium sed dignissimos provident ut enim voluptatem et nulla numquam aut odio ducimus. Sed velit impedit et voluptate iure qui mollitia voluptas et ratione alias ut ducimus incidunt aut fuga nemo ea quod voluptatibus.</p>
        </Card>
      </Col>


    </Row>
  );
  /* #endregion */

}
export default DefaultContent;