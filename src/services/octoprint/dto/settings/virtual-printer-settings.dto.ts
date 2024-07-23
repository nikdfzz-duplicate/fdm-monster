import { Capabilities, Errors, SdFiles } from "@/services/octoprint/dto/settings/settings-parts.type";

export interface VirtualPrinterSettingsDto {
  ambientTemperature: number;
  brokenM29: boolean;
  brokenResend: boolean;
  busyInterval: number;
  capabilities: Capabilities;
  commandBuffer: number;
  echoOnM117: boolean;
  enable_eeprom: boolean;
  enabled: boolean;
  errors: Errors;
  firmwareName: string;
  forceChecksum: boolean;
  hasBed: boolean;
  hasChamber: boolean;
  includeCurrentToolInTemps: boolean;
  includeFilenameInOpened: boolean;
  klipperTemperatureReporting: boolean;
  locked: boolean;
  m105NoTargetFormatString: string;
  m105TargetFormatString: string;
  m114FormatString: string;
  m115FormatString: string;
  m115ReportCapabilities: boolean;
  numExtruders: number;
  okAfterResend: boolean;
  okBeforeCommandOutput: boolean;
  okFormatString: string;
  passcode: string;
  pinnedExtruders: any;
  preparedOks: any[];
  repetierStyleTargetTemperature: boolean;
  reprapfwM114: boolean;
  resend_ratio: number;
  resetLines: string[];
  rxBuffer: number;
  sdFiles: SdFiles;
  sendBusy: boolean;
  sendWait: boolean;
  sharedNozzle: boolean;
  simulateReset: boolean;
  smoothieTemperatureReporting: boolean;
  supportF: boolean;
  supportM112: boolean;
  support_M503: boolean;
  throttle: number;
  waitInterval: number;
}