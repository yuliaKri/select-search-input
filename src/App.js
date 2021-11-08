import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import canadianCities from './canadian_cities';

const App = () => {
  const [status, setStatus] = useState(' empty');

  return (
      <div className='App'>
        <Window onChangeStatus={v=>setStatus(v)}/>
        <Bottom status={status} />
      </div>
  );
};

const Window = (props) => {
  return (
      <div className="Window">
        <label>City Name:</label>
        <CityField onChangeStatus={props.onChangeStatus}/>
      </div>
  );
};

const CityField = (props) => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [cityList, setCityList] = useState(canadianCities);
  const [toggleColor,setToggleColor] = useState(false);
  const [index,setIndex] = useState(null);
  const inputRef = useRef();
  const divRef = useRef([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const updateInput = (input) => {

    const filtered = canadianCities.filter(el => el.toLowerCase().includes(input.toLowerCase()));
    setCityList(filtered);

    setInput(input);

    if (input.length >= 2) setShow(true);
    else if (input.length < 2) {setShow(false);setToggleColor(false);}

    if (input.length > 0) {
      props.onChangeStatus(` ${input} (${filtered.length})`);
      setToggleColor(false);
    }
    else if (input.length === 0) { props.onChangeStatus(' empty'); setToggleColor(false); }

    if (filtered.length === 1 && input.toLowerCase() === filtered[0].toLowerCase()) {
      props.onChangeStatus(' valid');
      setShow(false);
      setToggleColor(true);
    }
  }

  const handleClick = (el) => {
    setInput(el);
    setShow(false);
    props.onChangeStatus(' valid');
    setToggleColor(true);
  }

  const handleThisKeyInInput = (e) => {
    if (e.key === 'ArrowDown') {
      if (cityList.length !== canadianCities.length) {
        setIndex(0);
        divRef.current[0].focus();
      }
    }
  }

  const handleThisKeyInDiv = (e) => {
    if (cityList.length === 1 && input.toLowerCase() === cityList[0].toLowerCase()) {
      props.onChangeStatus(' valid');
      setShow(false);
      setToggleColor(true);
    }

    if (e.key === 'ArrowDown') {
      if (index < cityList.length-1) {
        setIndex(prev=>prev+1);
        divRef.current[index+1].focus();
      }
    }

    if (e.key === 'ArrowUp') {
      if (index > 0) {
        setIndex(prev=>prev-1);
        divRef.current[index-1].focus();
      }
    }
  }

  return (
      <div data-testid='Input'>
        <input className={toggleColor ? "input green":"input"}
               key="random1"
               ref={inputRef}
               value={input}
               placeholder={"search city"}
               onChange={e => updateInput(e.target.value)}
               onKeyDown={e=>handleThisKeyInInput(e)}
        />
        <div className="Table">
          {show && cityList
              .filter((el,pos)=>cityList.indexOf(el) === pos)
              .filter(el=>el.toLowerCase().includes(input.toLowerCase()))
              .map((el,i)=>{
                return (
                    <div tabIndex="0"
                         className="row"
                         key={el}
                         ref={el=>divRef.current[i] = el}
                         onKeyDown={e=>handleThisKeyInDiv(e,el)}
                         onClick={()=>{handleClick(el)}}
                         onDoubleClick={()=>{handleClick(el)}}
                         onKeyPress={()=>{handleClick(el)}}
                    >
                      {el}
                    </div>
                )
              })}
        </div>
      </div>
  );
};

const Bottom = (status) => {
  return (
      <div data-testid='Bottom' className='Bottom'>
        <span>status: {status.status}</span>
      </div>
  )
};

export default App;