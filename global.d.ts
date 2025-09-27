// src/global.d.ts
declare module 'react-microsoft-clarity' {
  const clarity: {
    init: (id: string) => void
    trackPageView: () => void
    consent: (enabled: boolean) => void
    identify: (userId: string, properties?: Record<string, any>) => void
    set: (key: string, value: any) => void
  }
  export default clarity
}
