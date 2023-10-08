import axios from "axios";

class PhonesService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  // GET /api/phones
  getAllPhones = () => {
    return this.api.get("/api/phones");
  };

  // GET /api/phones/:id
  getPhone = (id) => {
    return this.api.get(`/api/phones/${id}`);
  };
}

// Create one instance (object) of the service
const phonesService = new PhonesService();

export default phonesService;
