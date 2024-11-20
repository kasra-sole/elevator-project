import React from "react";
import {
  Card,
  CardProps,
  Flex,
  List,
  Space,
  Tag,
  Typography,
  Card as AntdCard,
} from "antd";
import { createElement } from "react";
import CountUp from "react-countup";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

const data = [
  {
    icon: FacebookFilled,
    title: "Facebook",
    diff: 12.3,
    value: 27345832,
  },
  {
    icon: InstagramFilled,
    title: "Instagram",
    diff: -2.4,
    value: 463893,
  },
  {
    icon: TwitterOutlined,
    title: "Twitter",
    diff: 3.9,
    value: 978342,
  },
  {
    icon: YoutubeFilled,
    title: "Youtube",
    diff: 48.2,
    value: 738382,
  },
  {
    icon: LinkedinFilled,
    title: "Linkedin",
    diff: 48.2,
    value: 216869,
  },
];

type Props = CardProps;

const App: React.FC = ({ ...others }: Props) => (
  <Card
    title="تجزیه و تحلیل رسانه های اجتماعی"
    {...others}
    style={{ marginLeft: "16px", marginRight: "6px" }}
  >
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 2,
        xxl: 2,
      }}
      dataSource={data}
      renderItem={(item, i) => (
        <List.Item>
          <AntdCard key={`${item.title}-${i}`} hoverable={false}>
            <Flex vertical gap="middle" justify="center">
              <Flex align="center" justify="space-between">
                <Space>
                  {createElement(item.icon)}
                  <Typography.Text className="text-capitalize">
                    {item.title}
                  </Typography.Text>
                </Space>
                <Tag color={item.diff < 0 ? "red-inverse" : "green-inverse"}>
                  {item.diff}%
                </Tag>
              </Flex>
              <Flex gap="small" align="center">
                <Typography.Title level={3} className="m-0">
                  <CountUp end={item.value} />
                </Typography.Title>
                <Typography.Text
                  color="secondary"
                  style={{ marginTop: "10px" }}
                >
                  بازدیدکننده
                </Typography.Text>
              </Flex>
            </Flex>
          </AntdCard>
        </List.Item>
      )}
    />
  </Card>
);

export default App;
