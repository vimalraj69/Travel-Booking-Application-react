import React from 'react'
import { useState, useEffect } from 'react';
const Home = () => {

    
        const [selectedDate, setSelectedDate] = useState('');
      
        useEffect(() => {
          const today = new Date();
          const formattedDate = today.toISOString().split('T')[0];
          setSelectedDate(formattedDate);
        }, []);
      
        
    
  return (
    <div className="HomeConatainer">
        <div className="left">
        <div className="enterDetails">
            <form className='Homeform'>
                <label > From: </label>
                <select
                    
                >
                    <option value="salem">Salem</option>
                    <option value="chennai">Chennai</option>
                    <option value="coimbatore">Coimbatore</option>
                    <option value="Bangaluru">Bangaluru</option>
                </select>

                <label > To:</label>
                <select
                    
                >
                    <option value="chennai">Chennai</option>
                    <option value="salem">Salem</option>
                    <option value="coimbatore">Coimbatore</option>
                    <option value="Bangaluru">Bangaluru</option>
                </select>

                <label for="date">Select Date:</label>
                 <input type="date"
                    id="date"
                    name="date"
                    value={selectedDate}
                    onChange={(e)=> setSelectedDate(e.target.value)}  />

                    <button className='Homeformbut'>Search</button>
            </form>

        </div>

        </div>
        <div className="right">
        <div className="showlists"></div>

        </div>

    {/* <div className='mainHome'>
       

        
    </div> */}
    </div>
  )

}

export default Home