import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        danger: 'var(--danger)',
        accent: 'var(--accent)',
        info: 'var(--info)',
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 10px)",
        lg: "calc(var(--radius) - 16px)",
      },
      fontSize: {
        xl: "1.5625rem",  // 25px
        lg: "1.25rem",    // 20px
        base: "1rem",     // 16px
        md: "0.875rem",   // 14px
        sm: "0.75rem",    // 12px
      },
      fontWeight: {
        xl: "900",
        lg: "700",
        base: "400",
      },
    },
  },
  plugins: [],
};
export default config;
