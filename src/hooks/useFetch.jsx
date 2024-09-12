import { useSession } from '@clerk/clerk-react';
import { useState } from 'react';

export default function useFetch(callback, options = {}) {
  const { session } = useSession();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      let token = await session.getToken({ template: 'supabase' });

      let response = await callback(token, options, ...args);
      setData(response);
    } catch (error) {
      if (error?.message.includes('JWT expired')) {
        // Token expired, refresh it
        try {
          const newToken = await session.getToken({
            template: 'supabase',
            refresh: true,
          });
          // Retry the request with a new token
          const response = await callback(newToken, options, ...args);
          setData(response);
        } catch (refreshError) {
          setError(refreshError.message);
          console.error('Error refreshing token:', refreshError);
        }
      } else {
        setError(error.message);
        console.error('Error while fetching data:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { fn, data, loading, error };
}

// import { useSession } from '@clerk/clerk-react';
// import { useState } from 'react';

// export default function useFetch(callback, options = {}) {
//   const { session } = useSession();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fn = async (...args) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const token = await session.getToken({
//         template: 'supabase',
//       });

//       const response = await callback(token, options, ...args);
//       setData(response);
//     } catch (error) {
//       setError(error.message);
//       console.error('Error While Fetching Data: ', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { fn, data, loading, error };
// }
