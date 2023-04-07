import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-dm-check-biometric-changed' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const DmCheckBiometricChanged = NativeModules.DmCheckBiometricChanged
  ? NativeModules.DmCheckBiometricChanged
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const CheckBiometricChanged = NativeModules.CheckBiometricChanged
  ? NativeModules.CheckBiometricChanged
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );


export function biometricsChanged(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    CheckBiometricChanged.biometricsChanged()
      .then((response: any) => {
        if (response == true) resolve(true);
        else resolve(false);
      })
      .catch((error: any) => {
        reject(`${error}`);
      });
  });
}

export function verifyBiometric(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    CheckBiometricChanged.verifyBiometric()
      .then((response: any) => {
        if (response == true) resolve(true);
        else resolve(false);
      })
      .catch((error: any) => {
        reject(`${error}`);
      });
  });
}

export function refreshTracker(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    CheckBiometricChanged.refreshTracker()
      .then((response: any) => {
        if (response == true) resolve(true);
        else resolve(false);
      })
      .catch((error: any) => {
        reject(`${error}`);
      });
  });
}