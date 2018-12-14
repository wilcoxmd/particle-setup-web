const deviceUrl = "http://192.168.0.1";

class ParticleDeviceService {
  static async fetchDeviceId() {
    try {
      const response = await fetch(deviceUrl + "/device-id", {
        method: "GET",
        dataType: "JSON"
      });
      const data = await response.json();
      //response format: {"id":"280020008761353136383631","c":"1"}
      return data.id;
      await this.disconnectFromDevice();
    } catch (err) {
      return "Hmm...Couldn't find your device. Did you connect to it's Wi-Fi network?";
      console.log(err);
    }
  }

  static async disconnectFromDevice() {
    try {
      const response = await fetch(deviceUrl + "/connect-ap", {
        method: "POST",
        body: JSON.stringify({ idx: 0 }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  }

  static async scanAP() {
    try {
      const response = await fetch(deviceUrl + "/scan-ap", {
        method: "GET",
        dataType: "JSON"
      });
      const data = await response.json();
      //response format:
      // {
      //   "scans":[{
      //       "ssid":"ssidName","rssi":-73,"sec":4194308,"ch":11,"mdr":144400},
      //       {"ssid":"ssidName","rssi":-67,"sec":4194310,"ch":11,"mdr":216700}
      //    }]
      // }
      return data.scans;
    } catch (err) {
      console.log(err);
    }
  }

  static async getPublicKey() {
    try {
      const response = await fetch(deviceUrl + "/scan-ap", {
        method: "GET",
        dataType: "JSON"
      });
      const data = await response.json();
      const publicKey = data.b;
      return publicKey;
    } catch (err) {
      console.log(err);
    }
  }

  static encryptPassword(publicKey, password) {}

  static async connectDeviceToNetwork(network) {
    try {
      const response = await fetch(deviceUrl + "/configure-ap", {
        method: "POST",
        body: JSON.stringify({ idx: 0 }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  }
}

export default ParticleDeviceService;
