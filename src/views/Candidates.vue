<template>
  <div class="home">
    <page-header :data="{ title: 'Candidates' }" />
    <person-card
      v-for="candidate in candidates"
      :key="candidate.id"
      :person="{
        name: `${candidate.acf.name} ${candidate.acf.lastName}`,
        phone: candidate.acf.phoneNumber
      }"
    />
  </div>
</template>

<script>
import axios from 'axios'
import PersonCard from '@/components/PersonCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'Candidates',
  components: {
    'person-card': PersonCard,
    'page-header': PageHeader
  },
  data() {
    return {
      candidates: null
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/wp-json/acf/v3/candidates/`)
      .then(response => (this.candidates = response.data))
      .catch(err => console.error(`Erro: ${err}`))
  }
}
</script>
