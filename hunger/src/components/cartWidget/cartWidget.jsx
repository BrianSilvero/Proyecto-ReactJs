import { Avatar, Badge } from "antd";
import {ShoppingCartOutlined} from '@ant-design/icons';

const CardWidget = () => {
  return (
    <>
      <Badge count={5}>
        <Avatar shape="square" size="large" icon= {<ShoppingCartOutlined/>} />
      </Badge>
    </>
  );
};

export default CardWidget;
