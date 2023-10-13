// Tab1.tsx
import React, { useState } from 'react';

const Tab1: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

    return (
  <div>
    <h2>Tab 1</h2>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
    )
};

export default Tab1;
