import React, { useState } from "react";
import ReactDOM from "react-dom";

interface TestProps {
  className?: string;
  title?: string;
}

const Test: React.FC<TestProps> = props => {
  return <div>{props.title}</div>;
};

const App: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [visible2, setVisible2] = useState<boolean>(true);
  const [visibleTest, setVisibleTest] = useState<boolean>(true);

  return (
    <div>
      <div x-if={visible}>
        1111
        <div x-if={visible2}>2222</div>
      </div>
      <Test x-if={visibleTest} title="test" />
      <img x-if={visible} src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2969235134,2098148338&fm=11&gp=0.jpg" alt=""/>
      <button
        onClick={() => {
          setVisible(c => !c);
        }}
      >
        修改1
      </button>
      <button
        onClick={() => {
          setVisible2(c => !c);
        }}
      >
        修改2
      </button>
      <button
        onClick={() => {
          setVisibleTest(c => !c);
        }}
      >
        修改Test
      </button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
