import axios from '@/src/lib/axios'

import { type ApiListResponse } from '@/src/types/apiResponse'
import { type User } from '@/src/types/user'

const getListUsers = async (page = 1): Promise<ApiListResponse<User>> => {
  const { data } = await axios.get('/users', {
    params: {
      page,
    },
  })

  return data
}

export { getListUsers }
