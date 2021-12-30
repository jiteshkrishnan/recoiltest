import { useRecoilValue } from "recoil";
import { multipliedState } from "./recoil";
const Child = (props) => {
  const value = useRecoilValue(multipliedState);
  return <div>{value}</div>;
};

export default Child;
