export class ParticleService {
  static async fetchDeviceId() {
    try {
      const response = await fetch("http://192.168.0.1/device-id", {
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
      const response = await fetch("http://192.168.0.1/connect-ap", {
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
