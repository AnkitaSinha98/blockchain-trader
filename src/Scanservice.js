import http from "./http-common";

class Scanservice {
  farmerService(farmer) {
    return http.get(`/donors/${farmer}`);
  }

  scanDomainService(domain) {
    return http.get(
      `/domain/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&domain=${domain}`
    );
  }
}

export default new Scanservice();
