import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import CardWidget from '../cartWidget/cartWidget';
const items = [
    {
      label: <a href="https://www.antgroup.com">Inicio</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">Recetas</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Tienda',
      key: '3',
    },
  ];
const NavBar = () => {
  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Menu
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <CardWidget/>
    </div>
  );
};

export default NavBar;
