import { methodService, apiService } from './apiService';

const URL = {
  HISTORY_PERIOD: '/appreq/service.asmx',
  HISTORY_LAST_TRANSACTION: '/appreq/service.asmx',
  HISTORY_LAST_TOPUP: '/appreq/service.asmx',
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
    URL.HISTORY_PERIOD,
    methodService.POST,
    xml,
    null
  );
}

export function apiHistoryLastTransaction(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <ReportLast_DailyTopup xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
      </ReportLast_DailyTopup>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.HISTORY_LAST_TRANSACTION,
    methodService.POST,
    xml,
    null
  );
}

export function apiHistoryLastTopup(data){
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <ReportLast_StockDepositHistory_byStoreDate xmlns="http://tempuri.org/">
        <storeid>${data.email}</storeid>
      </ReportLast_StockDepositHistory_byStoreDate>
    </soap:Body>
  </soap:Envelope>`;
  return apiService(
    URL.HISTORY_LAST_TOPUP,
    methodService.POST,
    xml,
    null
  );
}