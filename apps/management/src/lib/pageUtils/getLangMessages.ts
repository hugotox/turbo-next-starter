interface GetLangMessages {
  locale?: string
  page: string
}

export const getLangMessages = async ({ locale = 'en', page }: GetLangMessages) => {
  return {
    messages: {
      ...(await import(`../../lang/${page}/${locale}.json`)).default,
    },
  }
}
