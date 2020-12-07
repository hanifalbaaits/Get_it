import { methodService, apiService } from './apiService';

const URL = {
  PRODUCT_ALL: '/appreq/service.asmx',
  BANNER_ALL: '/appreq/service.asmx',
}

export function apiHistoryPeriod(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <Report_DailyTopup xmlns="http://tempuri.org/">
        <BeginDate>${data.startDate}</BeginDate>
        <EndDate>${data.endDate}</EndDate>
        <storeid>${data.email}</storeid>
      </Report_DailyTopup>
    </soap:Body>
  </soap:Envelope>
  `;
  return apiService(
    URL.PRODUCT_ALL,
    methodService.POST,
    xml,
    null
  );
}