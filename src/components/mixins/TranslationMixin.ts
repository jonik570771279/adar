import { Component, Mixins } from 'vue-property-decorator';
import { State } from 'vuex-class';

import { mixins } from '@soramitsu/soraneo-wallet-web';

const OrdinalRules = {
  en: (v) => {
    const n = +v;

    if (!Number.isFinite(n) || n === 0) return v;

    const remainder = n % 10;

    if (remainder === 1) return `${n}st`;
    if (remainder === 2) return `${n}nd`;
    if (remainder === 3) return `${n}rd`;

    return `${n}th`;
  },
};

@Component
export default class TranslationMixin extends Mixins(mixins.TranslationMixin) {
  @State((state) => state.settings.language) language!: string;

  tOrdinal(n) {
    return OrdinalRules[this.$i18n.locale]?.(n) ?? n;
  }
}
