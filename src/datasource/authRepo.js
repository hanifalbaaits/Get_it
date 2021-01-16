import { methodService, apiService } from './apiService';

const URL = {
  AUTH_SESSION: '/appreqsession/service.asmx',
  AUTH_LOGIN: '/appreqsession/service.asmx',
  AUTH_LOGOUT: '/appreqsession/service.asmx',
  AUTH_REGISTER: '/appreqsession/service.asmx',
  AUTH_ACTIVATION: '/appreqsession/service.asmx',
}

export function apiSessionCreate(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Session_Create xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
        <signature>${data.signature}</signature>
      </Session_Create>
    </soap:Body>
  </soap:Envelope>`
  return apiService(
    URL.AUTH_SESSION,
    methodService.POST,
    xml,
    null
  )
}

export function apiLogin(data, token){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <User_Login xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
        <pass>${data.password}</pass>
        <sessionid>${token}</sessionid>
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

export function apiLogout(token) {
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Session_Logout xmlns="http://tempuri.org/">
        <sessionid>${token}</sessionid>
      </Session_Logout>
    </soap:Body>
  </soap:Envelope>`
  return apiService(
    URL.AUTH_LOGOUT,
    methodService.POST,
    xml,
    null
  )
}

export function apiRegister(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Store_Register xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
        <storename></storename>
        <pass>${data.password}</pass>
      </Store_Register>
    </soap:Body>
  </soap:Envelope>`
  return apiService(
    URL.AUTH_REGISTER,
    methodService.POST,
    xml,
    null
  );
}

export function apiActivation(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <User_Activation xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
        <oActivationCode>95d4deb6-6f89-4335-bdd0-c134fca8d060</oActivationCode>
      </User_Activation>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.AUTH_ACTIVATION,
    methodService.POST,
    xml,
    null
  )
}