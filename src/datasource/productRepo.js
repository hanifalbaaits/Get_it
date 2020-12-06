import { methodService, apiService } from './apiService';

const URL = {
  PRODUCT_ALL: '/appreq/service.asmx'
}

export function apiProductAll(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Product_InfoAll_byStorePrice xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
      </Product_InfoAll_byStorePrice>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.PRODUCT_ALL,
    methodService.POST,
    xml,
    null
  );
}