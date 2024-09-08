import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Balance = () => {
  const [balance, setBalance] = useState("")
  useEffect(() => {
    const fetchBalance = async () => {
      try{
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        const formatBalance = parseFloat(response.data.balance).toFixed(2);
        setBalance(formatBalance)
      }catch{
        console.log("Error Fetching balance: ", error);
      }
    }
    fetchBalance()
  }, [])
  return <div className="flex">
      <div className="font-bold text-lg">
          Your balance:
      </div>
      <div className="font-semibold ml-4 text-lg">
          Rs {balance}
      </div>
  </div>
}