#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DmCheckBiometricChanged, NSObject)

RCT_EXTERN_METHOD(biometricsChanged:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(verifyBiometric:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(refreshTracker:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
