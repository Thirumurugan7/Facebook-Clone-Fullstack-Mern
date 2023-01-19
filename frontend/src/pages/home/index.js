import Header from "../../components/header";
import { useRef, useState } from "react";
import useClickOutside from "../../helpers/clickOutside";

export default function Home() {
  const [visible, setVisible] = useState(true);
  const el = useRef(null); //summa
  useClickOutside(el, () => {
    setVisible(false);
    console.log("you lcicked oiutside");
  });
  return (
    <div>
      <Header />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}
