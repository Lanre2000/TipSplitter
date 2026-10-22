# TipSplitter

A focused, reassuring mobile utility that makes splitting a bill feel effortless. Built with Expo, React Native, and NativeWind following the TipSplitter Design System.

**Author:** Emmanuel Olukoga  
**Platforms:** iOS & Android (Web supported)

---

## Design System Highlights

- **Visual Theme:** Warm-white canvas (`#F7F8F6`), charcoal ink typography (`#202522`), and restrained Tip Green accent (`#397A58`).
- **Typography:** `Outfit` (600/700 display, 400/500 body) and `Geist Mono` (500/600 aligned monetary figures).
- **Instant Calculation:** Real-time calculation with minor-unit decimal safety for accuracy.
- **Bill Splitting:** Tactile counter stepper with a dedicated, clean per-person result breakdown.
- **Haptic Feedback:** Native tactile haptics via `expo-haptics` on all selections and counters.
- **Offline Persistence:** All calculations, custom presets, currency choices, and user settings persist locally across sessions via `@react-native-async-storage/async-storage`.
- **Share & Export:** Native breakdown sharing directly from calculation history cards.
- **Auto-Save & Instant History:** Valid calculations are automatically saved and deduplicated on entry or clearing the bill.
- **Accessibility:** Minimum 44×44px touch targets, accessible radio groups, adjustable steppers, and polite live regions.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npx expo start
```

### 3. Run Unit Tests
```bash
node --experimental-strip-types --test src/utils/__tests__/calculator.test.ts
```

### 4. Code Quality & Verification
```bash
npx tsc --noEmit
npx expo lint
```

---

## Project Structure

```
├── docs/
│   └── flutter_reference.dart       # Companion Flutter implementation
├── src/
│   ├── app/
│   │   ├── _layout.tsx              # Font loading, splash screen & AppProvider
│   │   └── (tabs)/
│   │       ├── _layout.tsx          # Tab bar navigator (Calculator, History, Presets, Settings)
│   │       ├── index.tsx            # Calculator screen with Save to History
│   │       ├── history.tsx          # History screen with past calculations & deletion
│   │       ├── presets.tsx          # Presets screen for custom tip rates
│   │       └── settings.tsx         # Settings & User Profile screen
│   ├── context/
│   │   └── AppContext.tsx           # Global state for history, presets, settings & user profile
│   ├── components/
│   │   ├── Header.tsx               # Product title, currency switch & reset
│   │   ├── BillInput.tsx            # Decimal input with 2px Tip Green focus outline
│   │   ├── TipSelector.tsx          # 10%, 15%, 20% options with quiet checkmark
│   │   ├── SplitSelector.tsx        # Tactile stepper for people count
│   │   └── ResultCard.tsx           # Monospaced Total Bill & Per-Person cards
│   ├── theme/
│   │   └── tokens.ts                # Colors, spacing, radii, typography tokens
│   └── utils/
│       ├── calculator.ts            # Decimal-safe math & currency formatting
│       ├── haptics.ts               # Platform-guarded haptic feedback helpers
│       └── __tests__/
│           └── calculator.test.ts   # Unit tests covering all calculations & edge cases
├── app.json                         # Expo configuration (TipSplitter branding)
└── tailwind.config.js               # NativeWind tokens configuration
```
