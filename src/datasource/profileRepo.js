import { methodService, apiService } from './apiService';

const URL = {
  PROFILE_INFO: '/appreq/service.asmx',
  PROFILE_BALANCE: '/appreq/service.asmx',
  PROFILE_UPDATE: '/appreq/service.asmx',
  PROFILE_CHANGE_PASSWORD: '/appreq/service.asmx'
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

export function apiProfileUpdate(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Store_UpdateInfo xmlns="http://tempuri.org/">
        <guid>${data.guid}</guid>
        <storename>${data.storename}</storename>
        <address>${data.address}</address>
        <city>${data.city}</city>
        <province>${data.province}</province>
        <region>${data.region}</region>
        <postcode>mobile apps</postcode>
        <telephone>${data.telephone}</telephone>
        <fax>${data.fax}</fax>
        <pic>${data.pic}</pic>
        <openingdate>${data.openingdate}</openingdate>
        <closingdate>${data.closingdate}</closingdate>
      </Store_UpdateInfo>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.PROFILE_UPDATE,
    methodService.POST,
    xml,
    null
  )
}

export function apiProfileChangePassword(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <User_CredentialUpdate xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
        <oOldPass>${data.oldPass}</oOldPass>
        <oNewPass>${data.newPass}</oNewPass>
      </User_CredentialUpdate>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.PROFILE_CHANGE_PASSWORD,
    methodService.POST,
    xml,
    null
  )
}