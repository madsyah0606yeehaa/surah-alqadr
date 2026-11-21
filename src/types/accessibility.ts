export interface AccessibilitySettings {
  textScaleStep: number; // -1 to 3 (0 = 100%)
  spacingStep: number; // -1 to 2 (0 = normal)
  invertColours: boolean;
  greyHues: boolean;
  underlineLinks: boolean;
  bigCursor: boolean;
  readingGuide: boolean;
  visualAlerts: boolean;
  keyboardNav: boolean;
}

export const DEFAULT_A11Y_SETTINGS: AccessibilitySettings = {
  textScaleStep: 0,
  spacingStep: 0,
  invertColours: false,
  greyHues: false,
  underlineLinks: false,
  bigCursor: false,
  readingGuide: false,
  visualAlerts: false,
  keyboardNav: true
};
