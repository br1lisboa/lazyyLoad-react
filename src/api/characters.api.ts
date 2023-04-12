import { instanceAxios } from './base.api';
const endPoint = 'character'

export const characters = {
    getAll: function ({ page = 1 }: { page: number }) {
        return instanceAxios.get(endPoint, {
            params: {
                page
            }
        })
    },
    getById: function ({ id }: { id: number }) {
        return instanceAxios.get(`${endPoint}/${id}`)
    }
}