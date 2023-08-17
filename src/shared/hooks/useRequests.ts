import axios from 'axios';
import { useState } from 'react';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url,
    })
      .then(result => result.data)
      .catch(error => {
        alert(
          `Erro ${typeof error === 'object' ? JSON.stringify(error) : error}`,
        );
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    const returnData = await axios({
      method: 'post',
      url,
      data: body,
    })
      .then(result => {
        alert('Login');
        return result.data;
      })
      .catch(error => {
        alert(
          `Erro ${typeof error === 'object' ? JSON.stringify(error) : error}`,
        );
      });

    setLoading(false);
    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
