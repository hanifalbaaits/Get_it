import { methodService, apiService } from './apiService';

const URL = {
  AUTH_LOGIN: '/appreq/service.asmx'
}

export function apiLogin(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <User_Login xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
        <pass>${data.password}</pass>
      </User_Login>
    </soap:Body>
  </soap:Envelope>`
  return apiService(
    URL.AUTH_LOGIN,
    methodService.POST,
    xml,
    null
  );
}