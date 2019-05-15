<template>
  <div class="home">
    <page-header :data="{ title: 'Interviewers' }" />
    <person-card
      v-for="interviewer in interviewers"
      :key="interviewer.id"
      type="interviewers"
      :person="{
        name: `${interviewer.acf.name} ${interviewer.acf.lastName}`,
        phone: interviewer.acf.phoneNumber,
        id: interviewer.id
      }"
    />
  </div>
</template>

<script>
import axios from 'axios'
import PersonCard from '@/components/PersonCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'interviewers',
  components: {
    'person-card': PersonCard,
    'page-header': PageHeader
  },
  data() {
    return {
      interviewers: null
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/wp-json/acf/v3/interviewers/`)
      .then(response => (this.interviewers = response.data))
      .catch(err => console.error(`Erro: ${err}`))
  }
}
</script>
