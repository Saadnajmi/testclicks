#import "FOOCustomViewManager.h"

@interface FlippedNSView: NSView
@end

@implementation FlippedNSView: NSView

- (BOOL)isFlipped {
  return YES;
}

@end

@interface RCT_EXTERN_MODULE(FOOCustomViewManager, RCTViewManager)

@end

@implementation FOOCustomViewManager: RCTViewManager

- (NSView *)view {
	
  return [FlippedNSView new];
}

@end


