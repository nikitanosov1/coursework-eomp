import { Button, Form, Input } from "antd";
import React, { useContext } from "react";
import Condition from "./../assets/condition.png";
import Lens from "./../assets/lens.png";
import Bog from "./../assets/bog.jpg";
import { useNavigate } from "react-router-dom";

import { GraphsContext } from "./../App.js";

const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sm: { span: 2 },
  },
  //   wrapperCol: {
  //     xs: { span: 20 },
  //     sm: { span: 16 },
  //   },
};
export const Home = () => {
  const navigate = useNavigate();
  const { test } = useContext(GraphsContext);
  console.log(test);

  const onFinish = () => {
    console.log("УРААА");
    navigate("/graph");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${Bog})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Form
        {...formItemLayout}
        onFinish={onFinish}
        layout="horizontal"
        className="shadow-lg p-4 m-2 bg-white bg-opacity-50"
      >
        <div className="flex flex-col w-80 my-4">
          <div className="mb-4">
            Курсовая работа по курсу "Уравнения математической физики"
          </div>
          <img src={Condition} alt="Condition" />
          <img src={Lens} alt="Lens" />
        </div>
        <Form.Item label="k" name="k">
          <Input placeholder="Введите k" required></Input>
        </Form.Item>
        <Form.Item label="с" name="c">
          <Input placeholder="Введите с" required></Input>
        </Form.Item>
        <Form.Item label="α" name="α">
          <Input placeholder="Введите α" required></Input>
        </Form.Item>
        <Form.Item label="l" name="l">
          <Input placeholder="Введите l" required></Input>
        </Form.Item>
        <Form.Item label="T" name="T">
          <Input placeholder="Введите T" required></Input>
        </Form.Item>
        <Form.Item label="R" name="R">
          <Input placeholder="Введите R" required></Input>
        </Form.Item>
        <Form.Item label="β" name="β">
          <Input placeholder="Введите β" required></Input>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Построить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
