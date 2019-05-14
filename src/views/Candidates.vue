<template>
  <div class="home">
    <h1>Candidates</h1>
    <ul>
      <li v-for="candidate in candidates" :key="candidate.id">
        {{ candidate.acf.name }}
        {{ candidate.acf.lastName }} -
        {{ candidate.acf.phoneNumber }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Candidates',
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
