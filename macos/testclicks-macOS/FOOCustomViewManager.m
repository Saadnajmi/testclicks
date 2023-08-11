#import "FOOCustomViewManager.h"

@interface FixedNSView: NSView
@end

@implementation FixedNSView: NSView

- (NSView *)hitTest:(NSPoint)point {
  for (NSView *subview in self.subviews) {
    NSPoint pointForHitTest = point;
    if ([subview isKindOfClass:[RCTView class]]) {
      pointForHitTest = [subview convertPoint:point fromView:self.superview];
    }

    NSView *result = [subview hitTest:pointForHitTest];
    if (result) {
      return result;
	}
  }
  return nil;
}

@end

@interface RCT_EXTERN_MODULE(FOOCustomViewManager, RCTViewManager)

@end

@implementation FOOCustomViewManager: RCTViewManager

- (NSView *)view {
	
  return [FixedNSView new];
}

@end


