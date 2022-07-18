import axiosClient from '@/utils/axiosClient';

export const getAllTutors = async () => {
  const res = await axiosClient.get('');
};

export async function updateTutor(data: any, token: string) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosClient.put(
      `/web/instructor/edit`,
      data,
      config
    );

    return response;
  } catch (error: any) {
    return error.response;
  }
}
