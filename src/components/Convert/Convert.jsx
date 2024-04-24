import React, { useState, useEffect } from 'react';
import './Convert.css';
import country_list from '../../utils/country-list';
import country_code from '../../utils/country-code';
import API_KEY from '../../utils/api-key';
import axios from 'axios';
import currencyapi from '@everapi/currencyapi-js'


const Convert = () => {
 // const [indCountry, setIndCountry] = useState(0); // 47
 // const [indCountry2, setIndCountry2] = useState(0); // 149
 // const [val, setVal] = useState("USD"); 
  const [OfCurrencyCountry, setOfCurrencyCountry] = useState("USD");
  const [toCurrencyCountry, setToCurrencyCountry] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [totalExRate, setTotalExRate] = useState(0);
  const [totalExRate2, setTotalExRate2] = useState(0);
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [statusToggle, setStatusToggle] = useState(false);
  const [error1, setError1] = useState("");
 // const [error2, setError2] = useState("");
  const select1 = document.querySelector("form select#of");
  const select2 = document.querySelector("form select#toward");

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    calcExchangeRate();
  }

  const toggleExchangeRate = () =>{
    console.log('test');
     const lastToCurrencyCountry = toCurrencyCountry;
     const lastOfCurrencyCountry = OfCurrencyCountry;

   
    if (statusToggle === false) {
      select1.value = lastToCurrencyCountry ;
     // setOfCurrencyCountry(lastToCurrencyCountry);
      select2.value = lastOfCurrencyCountry ;
     // setToCurrencyCountry(lastOfCurrencyCountry);
      setIndCountry(149);
      setIndCountry2(47);
      setStatusToggle(true)
    } else {
       select1.value = lastOfCurrencyCountry ;
      //setOfCurrencyCountry(lastOfCurrencyCountry);
      select2.value = lastToCurrencyCountry ;
      //  setToCurrencyCountry(lastToCurrencyCountry);
      setIndCountry(47);
      setIndCountry2(149);
      setStatusToggle(false)
    }
   
  }




  useEffect(() => {
  }, []);



  

  const  loadFlagAuto = (elt) =>{
    let code = ''
   for (const key in country_list) {
    if (Object.hasOwnProperty.call(country_list, key)) {
      if (elt === key) {
        code = country_list[key];
      }
    }
   }
   return code;
}


  const  calcExchangeRate = () =>{

    const client1 = new currencyapi(API_KEY)
        client1.latest({
            base_currency: OfCurrencyCountry,
            currencies: toCurrencyCountry
        }).then(res => {
          // console.log('RESSS',res);
           console.log('RESSS+',res.data[toCurrencyCountry]['value']);  // taux de change //ExchangeRate
           setTotalExRate(amount * (res.data[toCurrencyCountry]['value']));
          setStatus1(true);
    }).catch((err1) => {
        console.log('err1',err1);
    });

    const client2 = new currencyapi(API_KEY)
        client2.latest({
            base_currency: toCurrencyCountry,
            currencies: OfCurrencyCountry
        }).then(res => {
          // console.log('RESSS2',res);
           console.log('RESSS2+',res.data[OfCurrencyCountry]['value']);
           setTotalExRate2(amount * (res.data[OfCurrencyCountry]['value']));
          setStatus2(true);
    }).catch((err2) => {
         console.log('err2',err2);
    });
  }  




  return (
    <div className="Convert">
      <form onSubmit={onSubmitHandler}>
       <div className="convert-inputs flex">
             <div className="cvrt amount">
                 <label htmlFor="amount">Amount</label>
                 <input id='amount' type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
             </div>
              <div className="cvrt of">
                 <label htmlFor="of">Of</label>
                 <div className="contains-of">
                     <img src={"https://flagcdn.com/48x36/"+loadFlagAuto(OfCurrencyCountry).toLowerCase()+".png"} alt="flag" />
                     <select id='of'>
                       {
                         Object.keys(country_list).map((currency_code, i)=>{
                             return (
                               <option key={currency_code} selected={currency_code === "USD" ?  true : false} 
                               value={currency_code} 
                               onClick={()=>{setOfCurrencyCountry(currency_code)}}>{currency_code}</option>
                             );
                         })
                       }
                     </select>
                 </div>
              </div>
              <div className="btn-ctn">
                 <div className="btn-transact" onClick={()=>{toggleExchangeRate()}}>
                     <img src="../src/assets/transfert.svg" alt="" />
                 </div>
              </div>
             <div className="cvrt toward">
                 <label htmlFor="toward">towards</label>
                 <div className="contain-toward">
                     <img src={"https://flagcdn.com/48x36/"+loadFlagAuto(toCurrencyCountry).toLowerCase()+".png"} alt="flag" />
                     <select id='toward'>
                        {
                          Object.keys(country_list).map((currency_code, i)=>{ 
                              return (
                                <>
                                <option key={currency_code} selected={currency_code === "EUR" ?  true : false} 
                                value={currency_code} 
                                onClick={()=>{setToCurrencyCountry(currency_code)}} >{currency_code}</option>
                                </>
                              );
                          })
                        }
                     </select>
                 </div>
             </div>
       </div>
       {
        status1 === true ?
        <div className="convert-results">
           <div className="line1">{amount} {OfCurrencyCountry} = </div>
           <div className="line2">
           <span className="nb1">{totalExRate.toFixed(8).toString().split('.')[0]},</span>
           <span className="nb2">{totalExRate.toFixed(8).toString().split('.')[1]}  </span>
           <span className="nb3">{toCurrencyCountry}</span>
           </div>
            { status2 === true ? 
              <div className="line3">{amount} {toCurrencyCountry} =  {totalExRate2.toFixed(8)} {OfCurrencyCountry} </div>
              : null
            }
         </div> 
          : null
       }
       {
        error1 ? 
        <div className="convert-results">
           <div className="error">Something went wrong! please retry</div>
        </div> : null
       }
       <div className="convert-actions">
         <div className="notify">
            <div className="notify-icon">
             <img src="../src/assets/infos.svg" alt="" />
            </div>
            <div className="notify-resume">
            We use the mid-market rate for our converter. 
            The rate is given for information purposes only. 
            You will not benefit from this rate when sending money.
            <a href='#' className='notify-link'> Check shipping rates.</a>
            </div>
         </div>
         <div className="validate-btn">
            <button>Convert</button>
         </div>
       </div>
      </form>
    </div>
  );
};

export default Convert;
