
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';

const TrafficMonitoring = () => {
  const [interfaceValue, setInterfaceValue] = useState('eth0'); 
  const [duration, setDuration] = useState('');

  const handleStartCapture = (e) => {
    e.preventDefault();
 
    console.log('Starting capture...');
  };

  const handleStopCapture = (e) => {
    e.preventDefault();
    console.log('Stopping capture...');
  };

  return (
    <div className="container bg-slate-600 w-full h-full flex flex-col">
      <div className=' NavBar w-full h-20 bg-white flex flex-row justify-center items-center ' >
        <div className='w-5/6  flex flex-row justify-between'>
        <h2 className=' text-slate-700 text-xl font-semibold'>TrafficDetectionSystem</h2>
        <div className=' flex flex-row gap-5 '>
          <p className=' text-slate-700 font-semibold border-r-2 border-slate-700 pr-5'>HOME</p>
          <p className=' text-slate-700 font-semibold  border-r-2 border-slate-700 pr-5'>ABOUT</p>
          <p className=' text-slate-700 font-semibold border-r-2 border-slate-700 pr-5'>CONTACT ME</p>
          <Link to='/user'><p className=' text-slate-700 font-semibold'>REGISTER</p></Link>
        </div>
      </div>
      </div>
    <div>
      <div className=' w-5/6 h-fit py-5 flex flex-col justify-start mx-auto '>
      <h2 className=' mb-5 w-full text-center font-semibold text-xl'>Traffic Monitoring</h2>
      <form onSubmit={handleStartCapture} className=' flex flex-col'>
        <label htmlFor="interface">Network Interface:</label>
        <select
          id="interface"
          name="interface"
          value={interfaceValue}
          onChange={(e) => setInterfaceValue(e.target.value)}
          className='py-2 px-4 rounded-md bg-slate-200 text-slate-700 placeholder-slate-700'
        >
          <option value="eth0">eth0</option>
          <option value="wlan0">wlan0</option>
        </select>
        <br />

        <label htmlFor="duration">Capture Duration (seconds):</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          className='py-2 px-4 rounded-md bg-slate-200 text-slate-700 placeholder-slate-700'
        />
        <br />

        <button type="submit" className=' w-full bg-orange-600 py-2 px-4 rounded-md'>Start Capture</button>
      </form>

      <form onSubmit={handleStopCapture} className=' mt-5' >
        <button type="submit" className=' w-full bg-red-500 py-2 px-4 rounded-md'>Stop Capture</button>
      </form>

      </div>
      <div className="summary w-5/6 mx-auto ">
        <h3 className='mt-8 mb-4 w-full text-center font-semibold text-xl'>Traffic Summary</h3>
        <div className=' flex flex-row gap-4 justify-center items-center'>
        <p className=' w-full py-2 px-4 bg-slate-200 rounded-sm text-slate-700 text-sm font-semibold'>Total Packets Captured: <span id="total_packets">0</span></p>
        <p className=' w-full py-2 px-4 bg-slate-200 rounded-sm text-slate-700 text-sm font-semibold'>Packets per Second: <span id="packets_per_second">0</span></p>
        <p className=' w-full py-2 px-4 bg-slate-200 rounded-sm text-slate-700 text-sm font-semibold'>Detected Anomalies: <span id="detected_anomalies">0</span></p>
        </div>
      </div>

      <div className="alerts w-5/6 mx-auto">
        <h3 className='mt-8 mb-4 w-full text-center font-semibold text-xl'>Alerts</h3>
        <div className=' flex flex-row gap-4 justify-center items-center'>
        <p className=' w-full py-2 px-4 bg-slate-200 rounded-sm text-slate-700 text-sm font-semibold'>
        Timestamp: <span className=' TimeStamp'>2024-06-30 14:33:12</span>
        </p>
        <p className=' w-full py-2 px-4 bg-slate-200 rounded-sm text-slate-700 text-sm font-semibold'>
        Source IP: <span className=' SourceIP'>192.168.1.100</span> 
        </p>
        <p className=' w-full py-2 px-4 bg-slate-200 rounded-sm text-slate-700 text-sm font-semibold'>
        Destination IP: <span className=' DestinationIP'>192.168.1.101</span>
        </p>
        </div>
        <p className=' w-full py-2 px-4 bg-slate-200 rounded-sm text-slate-700 text-sm font-semibold mt-10'>
        Description: <span className=' Description'>Suspicious activity detected</span>
        </p>
        </div>
      </div>
      <div className=' footer w-full h-12 mt-8 bg-slate-800 flex justify-center items-center py-4'>
        <p>Traffic Detection System Project Work</p>
      </div>
    </div>
  );
};

export default TrafficMonitoring;
