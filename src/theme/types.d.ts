import * as createPalette from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    black?: any;
    white?: any;
    neutral?: any;
  }

  interface PaletteOptions {
    text?: {
      primary?: PaletteColorOptions;
      secondary?: PaletteColorOptions;
    };
    white?: PaletteColorOptions;
    neutral?: PaletteColorOptions;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
  }

  // export interface ThemeOptions {
  //   black?: any;
  //   white?: any;
  // }

}

declare module '@material-ui/core/styles/defaultTheme' {
  interface DefaultTheme {
    shape: Shape;
    breakpoints: Breakpoints;
    direction: Direction;
    mixins: Mixins;
    overrides?: Overrides;
    palette: Palette;
    props?: ComponentsProps;
    shadows: Shadows;
    spacing: Spacing;
    transitions: Transitions;
    typography: Typography;
    zIndex: ZIndex;
  }

}

declare module '@material-ui/core/styles/createTypography' {
  interface TypographyOptions {
    overline?: {
      textTransform?: string
    }
  }
}