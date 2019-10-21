const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarModelSchema = new Schema({
  make: {
    type: String
  },
  model: {
    type: String
  },
  version: {
    type: String
  },
  status: {
    type: String
  },
  carClass: {
    type: String
  },
  bodyStyle: {
    type: String
  },
  priceProduction: {
    type: String
  },
  priceDiscontinued: {
    type: String
  },
  image: {
    type: String
  },
  lengthMM: {
    type: String
  },
  widthMM: {
    type: String
  },
  heightMM: {
    type: String
  },
  wheelbaseMM: {
    type: String
  },
  groundClearance: {
    type: String
  },
  kerbWeightKG: {
    type: String
  },
  bootspace: {
    type: String
  },
  noOfDoors: {
    type: String
  },
  seatingCapacity: {
    type: String
  },
  noOfSeatingRrows: {
    type: String
  },
  displacement: {
    type: String
  },
  maxPowerBHP: {
    type: String
  },
  maxPowerRPM: {
    type: String
  },
  maxTorqueNM: {
    type: String
  },
  maxTorqueRPM: {
    type: String
  },
  transmissionType: {
    type: String
  },
  noOfGears: {
    type: String
  },
  drivetrain: {
    type: String
  },
  engineType: {
    type: String
  },
  cylinders: {
    type: String
  },
  boreXStrokeMM: {
    type: String
  },
  compressionRatio: {
    type: String
  },
  valvesPerCylinder: {
    type: String
  },
  dualClutch: {
    type: String
  },
  sportMode: {
    type: String
  },
  fuelSystem: {
    type: String
  },
  turbocharger: {
    type: String
  },
  turbochargeType: {
    type: String
  },
  drivingModes: {
    type: String
  },
  manualShifting: {
    type: String
  },
  engineStartStop: {
    type: String
  },
  fuelType: {
    type: String
  },
  alternateFuelType: {
    type: String
  },
  mileageKMPL: {
    type: String
  },
  fuelTankCapacityL: {
    type: String
  },
  suspensionFront: {
    type: String
  },
  suspensionRear: {
    type: String
  },
  brakeTypeFront: {
    type: String
  },
  brakeTypeRear: {
    type: String
  },
  steeringType: {
    type: String
  },
  turningRadiusM: {
    type: String
  },
  wheels: {
    type: String
  },
  spareWheel: {
    type: String
  },
  tyresFront: {
    type: String
  },
  tyresRear: {
    type: String
  },
  colourNames: {
    type: String
  },
  colourRGB: {
    type: String
  },
  airbags: {
    type: String
  },
  dualStageAirbags: {
    type: String
  },
  middleRearSeatbelt: {
    type: String
  },
  middleRearHeadRest: {
    type: String
  },
  tyrePressureMonitoringSystemTMPS: {
    type: String
  },
  childSeatAnchorPoints: {
    type: String
  },
  seatBeltWarning: {
    type: String
  },
  abs: {
    type: String
  },
  electronicBrakeForceDistribution: {
    type: String
  },
  brakeAssist: {
    type: String
  },
  electronicStabilityProgram: {
    type: String
  },
  fourWheelDrive: {
    type: String
  },
  hillHoldControl: {
    type: String
  },
  tractionControlSystem: {
    type: String
  },
  rideHeightAdjustment: {
    type: String
  },
  hillDescentControl: {
    type: String
  },
  limitedSlipDifferential: {
    type: String
  },
  differentialLock: {
    type: String
  },
  engineImmobilizer: {
    type: String
  },
  centralLocking: {
    type: String
  },
  speedSensingDoorLock: {
    type: String
  },
  childSafetyLock: {
    type: String
  },
  airConditioner: {
    type: String
  },
  rearAC: {
    type: String
  },
  powerOutlets12v: {
    type: String
  },
  steeringAdjustment: {
    type: String
  },
  keylessStart: {
    type: String
  },
  headlightOffReminder: {
    type: String
  },
  ignitionKeyOffReminder: {
    type: String
  },
  cruiseControl: {
    type: String
  },
  parkingSensors: {
    type: String
  },
  parkingAssist: {
    type: String
  },
  antiGlareMirrors: {
    type: String
  },
  vanityMirrors: {
    type: String
  },
  heater: {
    type: String
  },
  cabinBootAccess: {
    type: String
  },
  seatUpholstery: {
    type: String
  },
  leatherWrappedSteeringWheel: {
    type: String
  },
  leatherWrappedGearKnob: {
    type: String
  },
  driverSeatAdjustment: {
    type: String
  },
  headRests: {
    type: String
  },
  frontPassengerSeatAdjustment: {
    type: String
  },
  lumbarSupport: {
    type: String
  },
  adjustableLumbarSupport: {
    type: String
  },
  driverArmrest: {
    type: String
  },
  rearPassengerSeats: {
    type: String
  },
  rearPassengerAdjustableSeats: {
    type: String
  },
  "rowSeats3rd ": {
    type: String
  },
  rowSeatAdjustment3rd: {
    type: String
  },
  ventilatedSeats: {
    type: String
  },
  ventilatedSeatType: {
    type: String
  },
  interiors: {
    type: String
  },
  interiorColours: {
    type: String
  },
  rearArmrest: {
    type: String
  },
  foldingRearSeat: {
    type: String
  },
  splitRearSeat: {
    type: String
  },
  splitThirdRowSeat: {
    type: String
  },
  frontSeatPockets: {
    type: String
  },
  adjustableHeadRests: {
    type: String
  },
  electricallyAdjustableHeadrests: {
    type: String
  },
  cupHolders: {
    type: String
  },
  driverArmrestStorage: {
    type: String
  },
  cooledGloveBox: {
    type: String
  },
  sunglassHolder: {
    type: String
  },
  thirdRowCupHolders: {
    type: String
  },
  oneTouchDown: {
    type: String
  },
  oneTouchUp: {
    type: String
  },
  powerWindows: {
    type: String
  },
  outsideRearViewMirrors: {
    type: String
  },
  adjustableOrvm: {
    type: String
  },
  turnIndicatorsOrvm: {
    type: String
  },
  rearDefogger: {
    type: String
  },
  rearWiper: {
    type: String
  },
  exteriorDoorHandles: {
    type: String
  },
  interiorDoorHandles: {
    type: String
  },
  rainSensingWipers: {
    type: String
  },
  doorPockets: {
    type: String
  },
  doorBlinds: {
    type: String
  },
  rearWindowBlind: {
    type: String
  },
  bootLidOpener: {
    type: String
  },
  moonroof: {
    type: String
  },
  roofRails: {
    type: String
  },
  roofMountedAntenna: {
    type: String
  },
  bodyColouredBumpers: {
    type: String
  },
  chromeFinishExhaustPipe: {
    type: String
  },
  bodyKit: {
    type: String
  },
  rubStrips: {
    type: String
  },
  corneringHeadlights: {
    type: String
  },
  headlamps: {
    type: String
  },
  automaticHeadLamps: {
    type: String
  },
  followMeHomeHeadlamps: {
    type: String
  },
  daytimeRunningLights: {
    type: String
  },
  fogLamps: {
    type: String
  },
  tailLamps: {
    type: String
  },
  cabinLamps: {
    type: String
  },
  headlightHeightAdjuster: {
    type: String
  },
  gloveBoxLamp: {
    type: String
  },
  lightsOnVanityMirrors: {
    type: String
  },
  rearReadingLamp: {
    type: String
  },
  instrumentCluster: {
    type: String
  },
  tripMeter: {
    type: String
  },
  averageFuelConsumption: {
    type: String
  },
  averageSpeed: {
    type: String
  },
  distanceToEmpty: {
    type: String
  },
  clock: {
    type: String
  },
  lowFuelLevelWarning: {
    type: String
  },
  doorAjarWarning: {
    type: String
  },
  adjustableClusterBrightness: {
    type: String
  },
  gearIndicator: {
    type: String
  },
  shiftIndicator: {
    type: String
  },
  headsUpDisplay: {
    type: String
  },
  tachometer: {
    type: String
  },
  instantaneousConsumption: {
    type: String
  },
  integratedMusicSystem: {
    type: String
  },
  headUnitSize: {
    type: String
  },
  display: {
    type: String
  },
  displayScreenRearPassengers: {
    type: String
  },
  gpsNavigationSystem: {
    type: String
  },
  speakers: {
    type: String
  },
  usbCompatibility: {
    type: String
  },
  auxCompatibility: {
    type: String
  },
  bluetoothCompatibility: {
    type: String
  },
  mp3Playback: {
    type: String
  },
  cdPlayer: {
    type: String
  },
  dvdPlayback: {
    type: String
  },
  amFmRadio: {
    type: String
  },
  ipodCompatibility: {
    type: String
  },
  internalHardDrive: {
    type: String
  },
  steeringMountedControls: {
    type: String
  },
  voiceCommand: {
    type: String
  },
  warrantyYears: {
    type: String
  },
  warrantyKilometres: {
    type: String
  }
});

module.exporsts = CarModel = mongoose.model("CarModel", CarModelSchema);
