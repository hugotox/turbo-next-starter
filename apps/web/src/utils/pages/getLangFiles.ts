export const getLangFiles = async (locale: string) => {
  return {
    ...(await import(`web/lang/index/${locale}.json`)).default,
  }
}
