import service from '../utils/requist';
import Qs from 'qs';

export const login = (data)=>{
  return service.post('/mgmt/user/login',Qs.stringify(data))
}

export const getDetail = (data)=>{
  return service.get('mgmt',{data})
}






