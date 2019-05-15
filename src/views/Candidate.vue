<template>
  <div class="home">
    <page-header
      :data="{ title: `${candidate.acf.name} ${candidate.acf.lastName}` }"
    />
    <form action="">
      <div class="mb-6 px-3">
        <label class="uppercase mb-1" for="name">First name</label>
        <input
          class="block border border-cool-grey-200 p-3 w-full text-cool-grey-600 rounded"
          type="text"
          name="name"
          id="name"
          :value="candidate.acf.name"
        />
      </div>
      <div class="my-6 px-3">
        <label class="uppercase mb-1" for="lastName">Last name</label>
        <input
          class="block border border-cool-grey-200 p-3 w-full text-cool-grey-600 rounded"
          type="text"
          name="lastName"
          id="lastName"
          :value="candidate.acf.lastName"
        />
      </div>
      <div class="my-6 px-3">
        <label class="uppercase mb-1" for="phoneNumber">Phone Number</label>
        <input
          class="block border border-cool-grey-200 p-3 w-full text-cool-grey-600 rounded"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          :value="candidate.acf.phoneNumber"
        />
      </div>
      <div class="my-6 px-3 flex justify-end  items-center">
        <div class="">
          <router-link class="text-blue-vivid-700" to="/candidates"
            >Back to list</router-link
          >
        </div>
        <div class="f ml-2">
          <input
            class=" bg-blue-vivid-400 text-white py-3 px-6 uppercase font-bold text-center rounded cursor-pointer"
            type="submit"
            value="Update this candidate"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'Candidate',
  props: ['id'],
  components: {
    'page-header': PageHeader
  },
  data() {
    return {
      candidate: null
    }
  },
  mounted() {
    axios
      .get(
        `${process.env.VUE_APP_ROOT_API}/wp-json/acf/v3/candidates/${this.id}`
      )
      .then(response => (this.candidate = response.data))
      .catch(err => console.error(`Erro: ${err}`))
  }
}
</script>
