import axios, { AxiosResponse } from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error as Error}`);
  }
}

export {};
/* Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу 
та повертає об'єкт з даними. 
Використовуйте Generics для типізації повернутих даних. */
