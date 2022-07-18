import axiosWallet from '@/utils/axiosWallet';

export const getUserBalance = async () => {
  const res = await axiosWallet.get('/api/ewallet/userWallet');
  return res;
};
