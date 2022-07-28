import { ref, computed, watch, Ref, onMounted } from 'vue';

declare global {
    interface Window {
        instgrm:any;
    }
}

/**
 * This function provides embed code related controls
 * @param {object} code This object contain two parameter.
 * @returns {object} object
 * @example{
 *
    const code = ref(null);
    const { getEmbedScriptSrc, injectScript, isEmbedBlock, clearScript } = useEmbed(code);
 *  getEmbedScriptSrc: Returns embed code property  // width, height
 *
 *   return{
 *     isEmbedBlock: Provides information whether the value entered is suitable embed code pattern or not   // true | false
 *     clear
 *   }
 * }
 */

const useEmbed = (code: any = null) => {
  const embedCode: Ref = ref(code);
  const injectedScripts: Ref<HTMLScriptElement[]> = ref([]);
  const isEmbedBlock = computed(
    () =>
      /(?:<iframe[^>]*)(?:(?:\/>)|(?:>.*?<\/iframe>))/.test(embedCode.value) ||
      /(?:<blockquote[^>]*)(?:(?:\/>)|(?:>.*?<\/blockquote>))/.test(embedCode.value),
  );

  const getEmbedScriptSrc = (embedString = embedCode.value) => {
    const parser = new DOMParser();
    const parsedCode: any = parser.parseFromString(embedString, 'text/html');

    for (const node of parsedCode.body.childNodes) {
      if (node.tagName === 'SCRIPT') {
        return node.src;
      } else if (node.innerHTML && node.innerHTML.includes('<script')) {
        getEmbedScriptSrc(node.innerHTML);
      }
    }

    return null;
  };

  const clearScript = (scriptEl:any) => scriptEl.remove();

  const injectScript = ({ async = true, defer = false, id, src }: {async?: boolean, defer?: boolean, id: string, src: any}) => {
    const scriptWithSameId = document.getElementById(id);

    if (scriptWithSameId) {
      clearScript(scriptWithSameId);
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = id;
    script.src = src;
    script.async = async;
    script.defer = defer;
    document.body.insertAdjacentElement('afterend', script);

    script.addEventListener('load', () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    });

    injectedScripts.value = [...injectedScripts.value, script];
  };

  const clear = () => {
    embedCode.value = null;
    injectedScripts.value.map(script => clearScript(script));
    injectedScripts.value = [];
  };

  onMounted(() => {
    if (embedCode.value) {
      injectScript({ id: 'id', src: getEmbedScriptSrc(embedCode.value) });
    }
  })

  watch(code, newValue => {
    if (newValue) {
      injectScript({ id: 'id', src: getEmbedScriptSrc(newValue) });
    }
  });

  return {
    isEmbedBlock,
    clear,
  };
};

export default useEmbed;
