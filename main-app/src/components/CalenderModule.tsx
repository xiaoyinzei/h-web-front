
import locale from 'antd/es/date-picker/locale/zh_CN';
import React from 'react';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import {Calendar, Col, Radio, Row, Select, Typography, theme, Badge, Space, Button, Tooltip} from 'antd';
import type { CalendarProps } from 'antd';
import './CalenderModule.less'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const doThingsMap = new Map();
doThingsMap.set(0, '游戏🎮');
doThingsMap.set(1, '熬夜😣');
doThingsMap.set(2, '上线🙋‍♂️');
doThingsMap.set(3, '运动💪');
const typeMap = new Map();
typeMap.set(0, 'success');
typeMap.set(1, 'warning');
typeMap.set(2, 'processing');
typeMap.set(3, 'error');
const getListData = (value: Dayjs) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: typeMap.get(0), content: doThingsMap.get(2)},
                { type: typeMap.get(1), content: doThingsMap.get(1)},
                { type: typeMap.get(2), content: doThingsMap.get(3)},
            ];
            break;
        default:
    }
    return listData || [];
};


const CalenderModule: React.FC = () => {
    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge color="green" style={{ margin: '0 1px' }}/>
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        console.log(current);
        if (info.type === 'date') return dateCellRender(current);
        return info.originNode;
    };

    return (
        <div className={"CalenderModule"}>
            <Calendar cellRender={cellRender} locale={locale} headerRender={({ value, onChange }) => {
                const start = 0;
                const end = 12;
                const monthOptions = [];
                let current = value.clone();
                const localeData = value.localeData();
                const months = [];
                for (let i = 0; i < 12; i++) {
                    current = current.month(i);
                    months.push(localeData.monthsShort(current));
                }

                for (let i = start; i < end; i++) {
                    monthOptions.push(
                        <Select.Option key={i} value={i} className="month-item">
                            {months[i]}
                        </Select.Option>,
                    );
                }

                const year = value.year();
                const month = value.month();
                const options = [];
                for (let i = year - 1; i < year; i += 1) {
                    options.push(
                        <Select.Option key={i} value={i} className="year-item">
                            {i}
                        </Select.Option>,
                    );
                }
                return (
                    <div style={{ padding: 8 }}>
                        <Row>
                            <Col span={15}>
                                <Space direction="horizontal">
                                    <Badge color="green" text="运动🏀"/>
                                    <Badge color="black" text="熬夜😣" />
                                    <Badge color="blue" text="工作⛏" />
                                </Space>
                            </Col>
                            <Col span={5}>
                                <Select
                                    size="small"
                                    popupMatchSelectWidth={false}
                                    className="my-year-select"
                                    value={year}
                                    onChange={(newYear) => {
                                        const now = value.clone().year(newYear);
                                        onChange(now);
                                    }}
                                >
                                    {options}
                                </Select>
                            </Col>
                            <Col span={4}>
                                <Select
                                    size="small"
                                    popupMatchSelectWidth={false}
                                    value={month}
                                    onChange={(newMonth) => {
                                        const now = value.clone().month(newMonth);
                                        onChange(now);
                                    }}
                                >
                                    {monthOptions}
                                </Select>
                            </Col>
                        </Row>
                    </div>
                );
            }}/>

        </div>
    );
};

export default CalenderModule;