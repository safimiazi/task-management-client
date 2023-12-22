import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Components/Provider/AuthProvider';
import axios from 'axios';

const useAllData = () => {

    const { user } = useContext(AuthContext);
  
    const {
      data: todoData = [],
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["todo", user?.email],
      queryFn: async () => {
        const res = await axios.get(`http://localhost:5000/get-task?email=${user?.email}`);
        return res.data;
      },
    });
    return [todoData, refetch, isLoading]
  };

export default useAllData;