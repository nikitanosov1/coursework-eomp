import { Button, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import Condition from "./../assets/condition.png";
import Lens from "./../assets/lens.png";
import Bog from "./../assets/bog.jpg";
import { useNavigate } from "react-router-dom";
import { startCalculate } from "./../util/util.js";
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
  const [params, setParams] = useState({
    k: 0.065,
    c: 1.84,
    α: 0.002,
    l: 0.8,
    T: 1,
    R: 2,
    β: 0.004,
    n: 40,
  });

  const onFinish = () => {
    console.log(params);
    // startCalculate({
    //   k: 0.065,
    //   c: 1.84,
    //   α: 0.002,
    //   l: 0.8,
    //   T: 1,
    //   R: 2,
    //   β: 0.004,
    //   n: 45,
    // });
    startCalculate(params);
    navigate("/graph");
  };

  const changeInput = (event) => {
    event.persist();
    setParams((prev) => {
      return {
        ...prev,
        [event.target.name]: parseFloat(event.target.value),
      };
    });
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
        initialValues={params}
      >
        <div className="flex flex-col w-80 my-4">
          <div className="mb-4">
            Курсовая работа по курсу "Уравнения математической физики"
          </div>
          <img src={Condition} alt="Condition" />
          <img src={Lens} alt="Lens" />
        </div>
        <Form.Item label="k" name="k">
          <Input
            placeholder="Введите k"
            required
            name="k"
            onChange={changeInput}
          ></Input>
        </Form.Item>
        <Form.Item label="с" name="c">
          <Input
            placeholder="Введите с"
            required
            name="c"
            onChange={changeInput}
          ></Input>
        </Form.Item>
        <Form.Item label="α" name="α">
          <Input
            placeholder="Введите α"
            required
            name="α"
            onChange={changeInput}
          ></Input>
        </Form.Item>
        <Form.Item label="l" name="l">
          <Input
            placeholder="Введите l"
            required
            name="l"
            onChange={changeInput}
          ></Input>
        </Form.Item>
        <Form.Item label="T" name="T">
          <Input
            placeholder="Введите T"
            required
            name="T"
            onChange={changeInput}
          ></Input>
        </Form.Item>
        <Form.Item label="R" name="R">
          <Input
            placeholder="Введите R"
            required
            name="R"
            onChange={changeInput}
          ></Input>
        </Form.Item>
        <Form.Item label="β" name="β">
          <Input
            placeholder="Введите β"
            required
            name="β"
            onChange={changeInput}
          ></Input>
        </Form.Item>
        <Form.Item label="n" name="n">
          <Input
            placeholder="Введите кол-во членов ряда"
            required
            name="n"
            onChange={changeInput}
          ></Input>
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
