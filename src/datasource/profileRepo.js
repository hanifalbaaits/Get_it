import { methodService, apiService } from './apiService';

const URL = {
  PROFILE_INFO: '/appreq/service.asmx',
  PROFILE_BALANCE: '/appreq/service.asmx'
}

export function apiProfileInfo(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Store_Info_byStoreid xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
      </Store_Info_byStoreid>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.PROFILE_INFO,
    methodService.POST,
    xml,
    null
  );
}

export function apiProfileBalance(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Balance_User_select xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
      </Balance_User_select>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.PROFILE_BALANCE,
    methodService.POST,
    xml,
    null
  );
}