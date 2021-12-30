import { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { numberState } from "./recoil/";
export default function LoginButton() {
  const countRef = useRef(0);
  const [toggle, setToggle] = useRecoilState(numberState);
  countRef.current = toggle;

  useEffect(() => {
    console.log("countRef current", countRef.current);
  }, [toggle]);

  const handle = () => {
    console.log(`Clicked ${countRef.current} times`);
    setToggle((toggle) => ++toggle);
  };

  console.log("I rendered!");

  return <button onClick={handle}>clicke me {toggle}</button>;
}
