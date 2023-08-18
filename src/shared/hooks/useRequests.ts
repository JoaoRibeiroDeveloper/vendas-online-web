import axios from 'axios';
import { useState } from 'react';

import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

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
        setNotification('Entrando...', 'success');
        return result.data;
      })
      .catch(() => {
        setNotification('Senha inválida', 'error');
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
