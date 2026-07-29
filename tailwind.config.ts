import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#07111f', panel: '#0b192b', cyan: '#45d9e8' }, boxShadow: { glow: '0 0 50px rgba(69,217,232,.12)' } } }, plugins: [] } satisfies Config;
