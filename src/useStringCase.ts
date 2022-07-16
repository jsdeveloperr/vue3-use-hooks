import { ref } from 'vue';
/* @ts-ignore */
const useStringCase = (lang = 'en') => {
  const locale = ref(lang);

  const camelCase = (str: string) =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        /* @ts-ignore */
        return index === 0 ? word.toLocaleLowerCase(locale) : word.toLocaleUpperCase(locale);
      })
      .replace(/\s+/g, '');

  const kebabCase = (str: any) =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
              /* @ts-ignore */
      .map(item => item.toLocaleLowerCase(locale))
      .join('-');

  const pascalCase = (str: string) =>
          /* @ts-ignore */
    str.replace(/\w\S*/g, word => word.charAt(0).toLocaleUpperCase(locale) + word.substr(1).toLocaleLowerCase(locale));

  const capitalizeCase = (str: string)  => {
    const camelized = str.replace(/[-_](\w)/g, (_, c) => c.toLocaleUpperCase(locale));
        /* @ts-ignore */
    return camelized[0].toLocaleUpperCase(locale) + camelized.slice(1);
  };

  const lowerCase = (str: string | any) => str.toLocaleLowerCase(locale);

  const upperCase = (str: string | any) => str.toLocaleUpperCase(locale);

  const sentenceCase = (str: any) => str.toLocaleLowerCase(locale).replace(/(^\s*\w|[.!?]\s*\w)/g, (s: any) => s.toLocaleUpperCase(locale));

  return {
    camelCase,
    kebabCase,
    pascalCase,
    upperCase,
    lowerCase,
    sentenceCase,
    capitalizeCase,
  };
};

export default useStringCase;