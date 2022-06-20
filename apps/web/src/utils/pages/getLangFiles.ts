export const getLangFiles = async (locale: string) => {
  return {
    ...(await import(`lang/${locale}.json`)).default,
  }
}
