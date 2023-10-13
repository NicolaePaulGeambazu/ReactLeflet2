import React, { useEffect, useState } from 'react';
import { getAllData, deleteData } from './apiUsers';
import Toast from './Toast'; // Assuming you've saved the Toast component in a separate file

interface User {
  id: number;
  name: string;
  email: string;
}

interface Parc {
  id: number;
  name: string;
  // Add other properties if needed
}

interface Booking {
  id: number;
  user: number; // Assuming user is an ID
  parc: number; // Assuming parc is an ID
  comments: string;
  bookingdate: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Booking[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [parcs, setParcs] = useState<Parc[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message?: any; code: string } | null>(null);

  useEffect(() => {
    fetchData();
    getUsers();
    getParcs();
  }, []); // Dependencies array is empty, so this effect runs only on mount

 const fetchData = async () => {
  try {
    setLoading(true);
    const result = await getAllData('http://localhost:3001/api/1/bookings');
    console.log(result);
    if (Array.isArray(result?.data?.data)) {
      setData(result?.data?.data);
      setError(null);
    } else {
      setError({ message: result?.error, code: 'INVALID_DATA' });
    }
  } finally {
    setLoading(false);
  }
};

const getUsers = async () => {
  try {
    setLoading(true);
    const result = await getAllData('http://localhost:3001/api/1/users');
    if (Array.isArray(result?.data?.data)) {
      setUsers(result?.data?.data);
      setError(null);
    } else {
        console.log(result)
      setError({ message: result?.error, code: 'INVALID_DATA' });
    }
  } finally {
    setLoading(false);
  }
};

const getParcs = async () => {
  try {
    setLoading(true);
    const result = await getAllData('http://localhost:3001/api/1/parcs');
    if (Array.isArray(result?.data?.data)) {
      setParcs(result?.data?.data);
      setError(null);
    } else {
        console.log(result)
      setError({ message: result?.error, code: 'INVALID_DATA' });
    }
  }  finally {
    setLoading(false);
  }
};



  const handleDelete = async (id: number) => {
    try {
      setLoading(true);
      await deleteData(id, 'http://localhost:3001/api/1/bookings');
      setData((prevData) => prevData.filter((item) => item.id !== id));
      setError(null);
    } catch (error) {
        console.log(error);
      setError({ message: 'Error deleting data', code: 'DELETE_ERROR' });
    } finally {
      setLoading(false);
    }
  };

  const closeToast = () => {
    setError(null);
  };

  return (
    <div>
      <h1>API Interaction Example</h1>
      {error && <Toast message={error.message} code={error.code} onClose={closeToast} />}
      <ul>
        {data.map((item, index) => (
          <li key={item.id} style={{ border: '1px solid', padding: '10px', marginBottom: '10px' }}>
            <div>
              <strong>User:</strong>{' '}
                {users && users[index]?.name ? (
        <>
            {users[index].name} ({users[index].email})
        </>
        ) : (
        'User not found'
        )}

            </div>
            <div>
              <strong>Parc:</strong>{' '}
              {parcs[index] ? (
                parcs[index]?.name
              ) : (
                'Parc not found'
              )}
            </div>
            <div>
              <strong>Comments:</strong> {item?.comments}
            </div>
            <div>
              <strong>Booking Date:</strong> {item?.bookingdate}
            </div>
            <div>
              <button onClick={() => handleDelete(item?.id)} disabled={loading}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
