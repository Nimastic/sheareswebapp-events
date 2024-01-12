import { shorthands } from '@tamagui/shorthands';
import { tokens as defaultTokens } from '@tamagui/themes';
import { createFont, createTamagui } from 'tamagui';

const tokens = {
    ...defaultTokens,
    color: {
        white: '#FFFFFF',
        lightgray: '#E9E8E4',
        darkgray: '#393939',
        black: '#000000',
        orangeLight: '#F18437',
        yellowLight: '#F8D148',
        blueLight: '#4AB3FF',
        // change dark values later on
        orangeDark: '#F18437',
        yellowDark: '#F8D148',
        blueDark: '#4AB3FF',
    },
};

const themes = {
    light: {
        background: tokens.color.white,
        backgroundPress: tokens.color.lightgray,
        color: tokens.color.black,
    },
    light_orange: {
        background: tokens.color.orangeLight,
        // this is a darker shade of orange and should eventually be replaced with a colour gradient, i.e. orange1Light, orange2Light, etc
        // let uiux team decide on the colour values
        backgroundPress: '#EF731A',
        color: tokens.color.white,
    },
    // change this when we need to
    dark: {
        orange: '#F18437',
        white: '#FFFFFF',
        black: '#000000',
        yellow: '#F8D148',
        blue: '#4AB3FF',
        darkgray: '#393939',
        lightgray: '#E9E8E4',
    },
};

const headingFont = createFont({
    family: 'NotoSans',
    size: {
        5: 16, // H6 size
        6: 18,
        7: 20,
        8: 23,
        9: 30,
        10: 46, // H1 size
    },
    weight: {
        4: '300',
        6: '600',
    },
    letterSpacing: {
        4: 0,
        8: -1,
    },
});

const bodyFont = createFont({
    family: 'NotoSans',
    size: {
        1: 11,
        2: 12,
        3: 13,
        4: 14,
        5: 16,
        6: 18,
        7: 20,
        8: 23,
        9: 30,
        10: 46,
        11: 55,
        12: 62,
        13: 72,
        14: 92,
        15: 114,
        16: 134,
    },
    weight: {
        4: '300',
        6: '600',
    },
    letterSpacing: {
        4: 0,
        8: -1,
    },
});

const config = createTamagui({
    shorthands,
    fonts: {
        heading: headingFont,
        body: bodyFont,
    },
    themes,
    tokens,
    // media: createMedia({
    //     xs: { maxWidth: 660 },
    //     sm: { maxWidth: 800 },
    //     md: { maxWidth: 1020 },
    //     lg: { maxWidth: 1280 },
    //     xl: { maxWidth: 1420 },
    //     xxl: { maxWidth: 1600 },
    //     gtXs: { minWidth: 660 + 1 },
    //     gtSm: { minWidth: 800 + 1 },
    //     gtMd: { minWidth: 1020 + 1 },
    //     gtLg: { minWidth: 1280 + 1 },
    //     short: { maxHeight: 820 },
    //     tall: { minHeight: 820 },
    //     hoverNone: { hover: 'none' },
    //     pointerCoarse: { pointer: 'coarse' },
    // }),
});

export type AppConfig = typeof config;

declare module 'tamagui' {
    // overrides TamaguiCustomConfig so your custom types
    // work everywhere you import `tamagui`
    interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
