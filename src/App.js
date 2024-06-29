import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import BaskedFood from "./components/basket/BaskedFood";
import Modal from "./components/basket/Modal";
import TotalAmount from "./components/basket/TotalAmount";
import { OrderProvider } from "./components/store/OrderBusket";
import Forma from "./components/form/Forma";
import { useSelector } from "react-redux";

function App() {
  const {state} = useSelector((prev)=>prev.basket)

  const body = document.querySelector("body");
  if (state) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }

  const [form, setForm] = useState(false)




  return (
    <div className="App">
      <OrderProvider>
          <Header/>
          <Main />
          {state && (
            <Modal top="150px" left="380px">
              {!form && <BaskedFood />}
              {!form && <TotalAmount/>}
              {form && <Forma />}
            </Modal>
          )}
      </OrderProvider>

    </div>
  );
}

export default App;
