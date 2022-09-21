
import Button from "./components/Button";
import Buttonchildren from "./components/Buttonchildren";
import Tab from "./components/Tab";
import "./index.css"

function App() {
  return (
    <>

    <div style={{padding: 20}}>
      <Tab>
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
