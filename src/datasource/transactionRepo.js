import { methodService, apiService } from './apiService';

const URL = {
  TRANSACTION_TOPUP_TYPE: '/appreq/service.asmx',
  TRANSACTION_TOPUP_ACCOUNT: '/appreq/service.asmx',
  TRANSACTION_TOPUP: '/appreq/service.asmx',
  TRANSACTION_PAYMENT: '/tspreq/rpc.aspx',
}

export function apiTopupType(){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Topup_Balance_Type xmlns="http://tempuri.org/" />
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.TRANSACTION_TOPUP_TYPE,
    methodService.POST,
    xml,
    null
  );
}

export function apiTopupAccount(){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Topup_Balance_Account xmlns="http://tempuri.org/" />
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.TRANSACTION_TOPUP_ACCOUNT,
    methodService.POST,
    xml,
    null
  );
}

export function apiTopup(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Topup_Balance_Request xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
        <idtransfer>${data.id_transfer}</idtransfer>
        <nominaltransfer>${data.nominal}</nominaltransfer>
        <type>${data.type}</type>
      </Topup_Balance_Request>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.TRANSACTION_TOPUP,
    methodService.POST,
    xml,
    null
  );
}

export function apiPayment(data){
  let xml = `<?xml version="1.0" encoding="iso-8859-1"?>
  <methodCall>
      <methodName>topUpRequest</methodName>
      <params>
          <param>
              <value>
                  <struct>
                      <member>
                          <name>MSISDN</name>
                          <value>
                              <string>${data.email}</string>
                          </value>
                      </member>
                      <member>
                          <name>REQUESTID</name>
                          <value>
                              <string>${data.requestid}</string>
                          </value>
                      </member>
                      <member>
                          <name>PIN</name>
                          <value>
                              <string>${data.password}</string>
                          </value>
                      </member>
                      <member>
                          <name>NOHP</name>
                          <value>
                              <string>${data.phone}</string>
                          </value>
                      </member>
                      <member>
                          <name>NOM</name>
                          <value>
                              <string>${data.nom}</string>
                          </value>
                      </member>
                  </struct>
              </value>
          </param>
      </params>
  </methodCall>`;
  return apiService(
    URL.TRANSACTION_PAYMENT,
    methodService.POST,
    xml,
    null
  );
}