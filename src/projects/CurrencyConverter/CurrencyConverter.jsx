import React, { useEffect, useState } from "react";
import countryList from "../../utils/CountryLists";

const CurrencyConverter = () => {
  const [rate, setRate] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "XnmEEy2pBmFT80mMeduanUxzljfSUPkf");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((output) => {
        setRate(output.result);
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          setError(true);
        }
      });

    setAmount("");
  };

  return (
    <div className="w-[30%]">
      <div className="bg-slate-700 flex flex-col w-[100%] justify-center border border-transparent text rounded-md p-2 shadow-xl">
        <p className="text-center text-4xl mv font-bold">Currency Converter</p>
        <div className="flex flex-col my-3  items-center">
          <label className="mt-1 text-md mb-2 font-medium">
            Enter Your Amount
          </label>
          <input
            type="text"
            value={amount}
            placeholder="Enter and Convert"
            onChange={(e) => setAmount(e.target.value)}
            className="outline-none text-black rounded-md font-semibold py-1 px-2 bg-slate-200 w-[80%] "
          />
        </div>

        <div className="flex justify-around my-2">
          <div>
            <label className="mr-1 mb-3 text-md font-medium">From</label>
            <div className="border border-slate-500 rounded-md px-2 py-1 ">
              {Object.keys(countryList).map((currencyCode) => (
                <img
                  key={currencyCode + Date.now()}
                  src={`https://flagcdn.com/48x36/${countryList[
                    currencyCode
                  ].toLowerCase()}.png`}
                  className="w-[30px] h-[20px] object-cover mr-2"
                  alt="flag"
                  style={{
                    display: from === currencyCode ? "inline-block" : "none",
                  }}
                />
              ))}
              <select
                className="bg-slate-700 text-white outline-none "
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                {Object.keys(countryList).map((currencyCode) => (
                  <option key={currencyCode} value={currencyCode}>
                    {currencyCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="mr-1 mb-3 text-md font-medium">To</label>
            <div className="border border-slate-500 rounded-md px-2 py-1 ">
              {Object.keys(countryList).map((currencyCode) => (
                <img
                  key={currencyCode + Date.now()}
                  src={`https://flagcdn.com/48x36/${countryList[
                    currencyCode
                  ].toLowerCase()}.png`}
                  className="w-[30px] h-[20px] object-cover mr-2"
                  alt="flag"
                  style={{
                    display: to === currencyCode ? "inline-block" : "none",
                  }}
                />
              ))}
              <select
                className="bg-slate-700 text-white outline-none "
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                {Object.keys(countryList).map((currencyCode) => (
                  <option key={currencyCode} value={currencyCode}>
                    {currencyCode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="my-2 text-base font-semibold text-center">
          {rate !== "" && !error ? (
            <p>
              {from} - {to} Exchange rate is {to} {rate?.toFixed(2)}/=
            </p>
          ) : (
            rate !== "" ||
            (error && (
              <p className="text-base text-red-400 font-semibold text-center">
                Something Went Wrong
              </p>
            ))
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleSubmit}
            className="border border-blue-500 px-2 my-3 py-1 text-base font-medium cursor-pointer hover:bg-blue-500 rounded-md"
          >
            Get Exchange Rate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
