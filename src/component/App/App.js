import { useState, useEffect } from "react";
import style from './App.module.css'
import axios from "axios";
import Modal from "../Modal/Modal"
import Spinner from "../Spinner/Spinner";
import ResultList from "../../ResultList/ResultList";
import CollapsibleTable from "../TableList/TableList";
import CandleList from "../CandleList/CandleList";

const serverURL = 'http://91.210.37.162:4444'
// const serverURL = 'http://localhost:3005';
// const serverURL = 'https://analitserver.herokuapp.com'

export default function App() {
  const [result, setResult] = useState([]);
  const [isReq, setIsReq] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [per, setPer] = useState([]);
  // const [sum, setSum] = useState(0);
  // const [ras, setRas] = useState(0);
  // const [nes, setNes] = useState(0);
  // const [summa, setSumma] = useState(0);
  // const [rasn, setRasn] = useState(0);
  
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem("contacts")) ?? [];
  // });
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact =async (perem) => {
    try {
      setPer([perem,...per])
    console.log('per=',per);
    setIsReq(true)
    const a = await axios.post(serverURL+'/bur',  perem );
    // console.log("a=", a.data);
    // console.log("a0=", a.data[0]);
    setResult([a.data,...result])
    setIsReq(false)
    
    // console.log("a=", result);
    } catch (error) {
      alert(error);
    }
    
  };
  //http://localhost:3005
  // const deleteContact = (id) => setContacts(contacts.filter((contact) => contact.id !== id));
  const deleteContact = (id) => {
    // const res = result.filter((r) => {
    //   // r.forEach(el => {
    //   //   el._id === id;
    //   // });
    //   r[1]._id === id
    // })
    setIsModal(true)
  }
    const closeModal = () => {setIsModal(false)}
  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  // };

  // const visibleContacts = () => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

    return (
      <div className={style.container}>
        <h1>Analytics</h1>
        {/* <FormPropsTextFields /> */}
        <CandleList handleAddContact={handleAddContact} />
        {/* <AddContact handleAddContact={handleAddContact} /> */}
        <h2>Result</h2>
        
        {isReq && (<h4><Spinner /></h4>)}
        {result.length > 0 ?
          <>
            {/* <Filtr value={filter} onChange={changeFilter}/> */}
            {!isReq && <CollapsibleTable
              result={result}
              per={per} />}
            {/* <OutputList result = {result} per={per} /> */}
            {/* <ContactList contacts={result} delet={deleteContact} /> */}
          </>
        : (<h4>Your result is empty</h4>)
        }
        
        {isModal && (<Modal onClose={closeModal} >
                    {<ResultList />}
          </Modal>)}
      </div>
    );
}

export { serverURL };
