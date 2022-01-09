<template>
  <div>
    <country-flag :country="getCountry" size='normal'/>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`" :value="lang">
          {{ $t(lang) }}
        </option>
      </select>
    </div>
    <p>{{ $t('message') }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloI18n',

  computed: {
    getCountry() {
      return this.$i18n.locale === 'en' ? 'gb' : this.$i18n.locale;
    }
  }
})
</script>

