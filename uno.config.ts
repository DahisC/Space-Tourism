import { defineConfig, presetWind3, presetWebFonts, presetAttributify } from 'unocss';
import type { Preset } from 'unocss';

export const presetSpaceTourism: Preset = {
  name: 'SpaceTourism',
  presets: [
    presetWebFonts({
      provider: 'google',
      fonts: {
        bellefair: 'Bellefair',
        'barlow-condensed': 'Barlow Condensed',
        barlow: 'Barlow',
      },
    }),
  ],
  theme: {
    breakpoints: {
      tablet: '376px',
      desktop: '769px',
    },
    colors: {
      'blue-900': '#0B0D17',
      'blue-300': '#D0D6F9',
      white: '#FFFFFF',
    },
  },
  shortcuts: {
    'bg-settings': 'bg-no-repeat bg-cover bg-center',

    'bg-home-desktop': 'bg-[url("/assets/home/background-home-desktop.jpg")]',
    'bg-home-tablet': 'bg-[url("/assets/home/background-home-tablet.jpg")]',
    'bg-home-mobile': 'bg-[url("/assets/home/background-home-mobile.jpg")]',

    'desktop-text-preset-1': 'font-bellefair text-[144px]',
    'desktop-text-preset-2': 'font-bellefair text-[100px]',
    'desktop-text-preset-3': 'font-bellefair text-[56px]',
    'desktop-text-preset-4': 'font-bellefair text-[32px]',
    'desktop-text-preset-5': 'font-barlow-condensed text-[28px] tracking-[4px]',
    'desktop-text-preset-6': 'font-bellefair text-[28px]',
    'desktop-text-preset-7': 'font-barlow-condensed [text-14px] tracking-[2px]',
    'desktop-text-preset-8': 'font-barlow-condensed [text-16px] tracking-[2px]',
    'desktop-text-preset-9': 'font-barlow text-[18px] leading-[180%]',
    'tablet-text-preset-2': 'font-bellefair text-[80px]',
    'tablet-text-preset-3': 'font-bellefair text-[40px]',
    'tablet-text-preset-4': 'font-bellefair text-[24px]',
    'tablet-text-preset-5': 'font-barlow-condensed text-[20px] tracking-[4px]',
    'tablet-text-preset-9': 'font-barlow text-[16px] leading-[180%]',
    'mobile-text-preset-1': 'font-bellefair text-[80px]',
    'mobile-text-preset-2': 'font-bellefair text-[56px]',
    'mobile-text-preset-3': 'font-bellefair text-[24px]',
    'mobile-text-preset-4': 'font-bellefair text-[18px]',
    'mobile-text-preset-6': 'font-barlow-condensed text-[16px]',
    'mobile-text-preset-8': 'font-barlow-condensed [text-14px] tracking-[2px]',
    'mobile-text-preset-9': 'font-barlow text-[15px] leading-[180%]',
  },
};

export default defineConfig({
  presets: [presetAttributify(), presetWind3(), presetSpaceTourism],
});
