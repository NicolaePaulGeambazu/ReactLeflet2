// Tab3.tsx
import React from 'react';

interface Tab3Props {
  data: any[];
}

const Tab3: React.FC<Tab3Props> = ({ data }) => (
  <div>
    <h2>Tab 3</h2>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.bookingDate}</li>
      ))}
    </ul>
  </div>
);

export default Tab3;
