import {
	DashboardOutlined,
	CarryOutOutlined,
	PieChartOutlined,
	TeamOutlined,
	BookOutlined,
	UserOutlined,
	LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}
const items = [
	getItem(<Link to='/dashboard'>Дашбоард</Link>, '1', <DashboardOutlined />),
	getItem(<Link to='/students'>Студенты</Link>, '2', <TeamOutlined />),
	getItem('Посещаемость', '3', <CarryOutOutlined />),
	getItem('Домашнее задания', '4', <BookOutlined />),
	getItem('Отчеты', 'sub1', <PieChartOutlined />, [
		getItem('Tom', '6'),
		getItem('Bill', '7'),
		getItem('Alex', '8'),
	]),
	getItem('Пользователи', '5', <UserOutlined />),
	getItem(<Link to='/logout'>Выйти</Link>, '10', <LogoutOutlined />),
];

export default items;
