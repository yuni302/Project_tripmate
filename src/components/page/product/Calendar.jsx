import React, { useEffect, useState } from 'react';
import axios from 'axios';

// DatePicker
import FullCalendar from '@fullcalendar/react';
import dayGridPlugins from '@fullcalendar/daygrid';
import momentPlugin from '@fullcalendar/moment';

// Style Components
import { CalendarStyle } from 'style/productStyle/ProductStyle';

const Calendar = ({ img, productNum }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
        if (res.status !== 200) throw new Error("Can't find news");
        setList(res.data.productList);
      } catch (e) {
        console.error(e);
      }
    };

    getList();
  }, []);

  const PriceCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const Title = list
    .filter((item) => item.productNum === productNum)
    .filter((item) => item.price !== undefined)
    .map((item) => PriceCommas(item.price));

  const Date = list
    .filter((item) => item.productNum === productNum)
    .map((item) =>
      item.start.map((res) => ({
        title: Title[0] === undefined ? '가격문의' : Title[0],
        date: res
          .toString()
          .replace(/(.{4})/, '$1-')
          .replace(/(.{7})/, '$1-'),
      }))
    );

  return (
    <CalendarStyle>
      <img src={img} alt={img} />
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugins, momentPlugin]}
          initialView="dayGridMonth"
          events={Date[0]}
          contentHeight={700}
          titleFormat="YYYY.MM"
          headerToolbar={{
            start: 'prev',
            center: 'title',
            end: 'next',
          }}
        />

        <div className="reservation">
          <div className="plan">
            <div id="possible-box" />
            <span>예약가능</span>
          </div>
          <div className="plan">
            <div id="impossible-box" />
            <span>예약불가</span>
          </div>
          <div className="plan">
            <div id="select-box" />
            <span>선택날짜</span>
          </div>
          <div className="plan">
            <div id="today-box" />
            <span>오늘날짜</span>
          </div>
        </div>
      </div>
    </CalendarStyle>
  );
};

export default Calendar;
