/* #region  [- import -] */
import { Pie, Bar } from '@ant-design/plots';
import { useEffect, useState } from 'react';
import { getContact } from '../../../store/reducers/contactAction';
import { useAppSelector, useAppDispatch } from "../../../store/config/configureStore";
import { Col, Row, Card } from 'antd';
import './defaultContent.css';
/* #endregion */

const DefaultContent = (): JSX.Element => {

  /* #region  [- variables -] */
  type percentType = any
  const dispatch = useAppDispatch();
  const contactsList = useAppSelector((state) => state.contact.contactsList);
  const [ageSmallerThanTwenty, setAgeSmallerThanTwenty] = useState<number>(0);
  const [ageBetweenTwentyAndThirty, setAgeBetweenTwentyAndThirty] = useState<number>(0);
  const [ageBetweenThirtyAndForty, setAgeBetweenThirtyAndForty] = useState<number>(0);
  const [ageBetweenFortyAndFifty, setAgeBetweenFortyAndFifty] = useState<number>(0);
  const [ageLargerThanFifty, setAgeLargerThanFifty] = useState<number>(0);


  /* #endregion */

  /* #region  [- methods -] */

  /* #region  [- getContact -] */
  useEffect(() => {
    dispatch(getContact())
  }, [])
  /* #endregion */

  /* #region  [- calculateChartData -] */
  useEffect(() => {
    var totalContacts: number = Object.keys(contactsList).length;
    if (totalContacts > 0) {
      findTotalPercentageOfAgeSmallerThanTwenty(totalContacts);
      findTotalPercentageOfAgeBetweenTwentyAndThirty(totalContacts);
      findTotalPercentageOfAgeBetweenThirtyAndForty(totalContacts);
      findTotalPercentageOfAgeBetweenFortyAndFifty(totalContacts);
      findTotalPercentageOfAgeLargerThanFifty(totalContacts);
    }
  }, [contactsList])
  /* #endregion */

  /* #region  [- findTotalPercentageOfAgeSmallerThanTwenty -] */
  const findTotalPercentageOfAgeSmallerThanTwenty = (totalContacts: number) => {
    var percentage: number = Number(((Object.keys(contactsList.filter((item: any) => item.age < 20)).length / totalContacts) * 100).toFixed(2));
    setAgeSmallerThanTwenty(percentage);
  }
  /* #endregion */

  /* #region  [- findTotalPercentageOfAgeBetweenTwentyAndThirty -] */
  const findTotalPercentageOfAgeBetweenTwentyAndThirty = (totalContacts: number) => {
    var percentage: number = Number(((Object.keys(contactsList.filter((item: any) => item.age >= 20 && item.age < 30)).length / totalContacts) * 100).toFixed(2));
    setAgeBetweenTwentyAndThirty(percentage);
  }
  /* #endregion */

  /* #region  [- findTotalPercentageOfAgeBetweenThirtyAndForty -] */
  const findTotalPercentageOfAgeBetweenThirtyAndForty = (totalContacts: number) => {
    var percentage: number = Number(((Object.keys(contactsList.filter((item: any) => item.age >= 30 && item.age < 40)).length / totalContacts) * 100).toFixed(2));
    setAgeBetweenThirtyAndForty(percentage);
  }
  /* #endregion */

  /* #region  [- findTotalPercentageOfAgeBetweenFortyAndFifty -] */
  const findTotalPercentageOfAgeBetweenFortyAndFifty = (totalContacts: number) => {
    var percentage: number = Number(((Object.keys(contactsList.filter((item: any) => item.age >= 40 && item.age < 50)).length / totalContacts) * 100).toFixed(2));
    setAgeBetweenFortyAndFifty(percentage);
  }
  /* #endregion */

  /* #region  [- findTotalPercentageOfAgeLargerThanFifty -] */
  const findTotalPercentageOfAgeLargerThanFifty = (totalContacts: number) => {
    var percentage: number = Number(((Object.keys(contactsList.filter((item: any) => item.age >= 50)).length / totalContacts) * 100).toFixed(2));
    setAgeLargerThanFifty(percentage);
  }
  /* #endregion */

  /* #endregion */

  /* #region  [- pieChartData -] */
  const pieChartData = [
    {
      type: 'Age<20',
      value: ageSmallerThanTwenty,
    },
    {
      type: '20<=Age<30',
      value: ageBetweenTwentyAndThirty,
    },
    {
      type: '30<=Age<40',
      value: ageBetweenThirtyAndForty,
    },
    {
      type: '40<=Age<50',
      value: ageBetweenFortyAndFifty,
    },
    {
      type: '50<=Age',
      value: ageLargerThanFifty,
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

  const barChartData = [
    {
      gender: 'Female',
      total: Object.keys(contactsList.filter((item: any) => item.gender === 'female')).length
    },
    {
      gender: 'Male',
      total: Object.keys(contactsList.filter((item: any) => item.gender === 'male')).length,
    },

  ];

  const barChartConfig = {
    data: barChartData,
    xField: 'total',
    yField: 'gender',
    seriesField: 'gender',

  };

  /* #region  [- return -] */
  return (
    <Row className='default-content'>
      <Col className='bar-chart-col' md={24} lg={12} xl={12} xxl={12}>
        <Bar {...barChartConfig} className='bar-chart' />
      </Col>
      <Col className='pie-chart-col' md={24} lg={12} xl={12} xxl={12}>
        <Pie  {...pieChartConfig} className='pie-chart' />
        <Card title="Contact's Age View" className='description-card'>
          <p>Lorem ipsum dolor sit amet. Sed illo voluptatem rem ipsa excepturi aut amet fugit ut sint asperiores ut dolorem nisi ut reiciendis reiciendis quo porro earum. Et blanditiis assumenda et vitae accusantium sed dignissimos provident ut enim voluptatem et nulla numquam aut odio ducimus. Sed velit impedit et voluptate iure qui mollitia voluptas et ratione alias ut ducimus incidunt aut fuga nemo ea quod voluptatibus.</p>
        </Card>
      </Col>


    </Row>
  );
  /* #endregion */

}
export default DefaultContent;