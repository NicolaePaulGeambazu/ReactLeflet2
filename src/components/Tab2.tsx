// Tab2.tsx
import React from 'react';

interface Tab2Props {
  data: any[];
}

const Tab2: React.FC<Tab2Props> = ({ data }) => {
    console.log(data);
  return (
  <div>
    <h2>Tab 2</h2>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
)}

export default Tab2;
