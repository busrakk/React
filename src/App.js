
import { useState } from "react";
import Button from "./components/Button";
import Buttonchildren from "./components/Buttonchildren";

import Lifecycledemo from "./components/Lifecycledemo";
import Tab from "./components/Tab";
import Userefdemo from "./components/Userefdemo";
import "./index.css"

function App() {

  const [show, setShow] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>

    <div>
      <Userefdemo />
    </div>

    <div>
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>

      {show && <Lifecycledemo/>}
    </div>
{/*
    <div>
      <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>

      {show && <Lifecycle/>}
    </div>
  */}
    <div style={{padding: 20}}>

      <button onClick={() => setActiveTab(2)}>
        Aktif Tab
      </button>

      <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
        <Tab.Panel title="Profil"> 1. Panel </Tab.Panel>
        <Tab.Panel title="Hakkında"> 2. Panel </Tab.Panel>
        <Tab.Panel title="Ayarlar"> 3. Panel </Tab.Panel>
      </Tab>
    </div>

    <div style={{padding: 20}}>
      <Button text="buton örneği"/>
      <Button text="buton örneği" variant="success"/>
      <Button text="buton örneği" variant="danger"/>
      <Button text="buton örneği" variant="warning"/>
      <br></br>
      <div>
        <Buttonchildren>
          Buton
        </Buttonchildren>
        <Buttonchildren variant="success">
        Buton
        </Buttonchildren>
        <Buttonchildren variant="danger">
        Buton
        </Buttonchildren>
        <Buttonchildren variant="warning">
        Buton
        </Buttonchildren>
      </div>
   
    </div>

    </>
  );
}

export default App;
