const exportYamlBuffer =
  "version: 1.3.1-rc2\n" +
  "exportedAt: 2023-05-01T04:46:06.130Z\n" +
  "config:\n" +
  "  printerComparisonStrategiesByPriority:\n" +
  "    - name\n" +
  "    - url\n" +
  "  exportPrinters: true\n" +
  "  exportFloorGrid: true\n" +
  "  exportFloors: true\n" +
  "  floorComparisonStrategiesByPriority: floor\n" +
  "printers:\n" +
  "  - id: 644eb6d8c549c7e24e153b6a\n" +
  "    stepSize: 10\n" +
  "    disabledReason: null\n" +
  "    enabled: true\n" +
  "    dateAdded: 1682880216980\n" +
  "    settingsAppearance:\n" +
  "      name: MyPrintah\n" +
  "    webSocketURL: ws://localhost/\n" +
  "    printerURL: http://localhost/\n" +
  "    apiKey: SOMEAWESOMEAPIKEYTHATOCTOPRINTLI\n" +
  "  - id: 644eb6d8c549c7e24e153b6d\n" +
  "    stepSize: 10\n" +
  "    disabledReason: null\n" +
  "    enabled: true\n" +
  "    dateAdded: 1682880216989\n" +
  "    settingsAppearance:\n" +
  "      name: MyPrintah2\n" +
  "    webSocketURL: ws://localhost:81/\n" +
  "    printerURL: http://localhost:81/\n" +
  "    apiKey: SOMEAWESOMEAPIKEYTHATOCTOPRINTLI\n" +
  "floors:\n" +
  "  - id: 6446f7345fb876356c31e5d2\n" +
  "    floor: 1\n" +
  "    name: Default Floor\n" +
  "    printers: []";

module.exports = {
  exportYamlBuffer,
};