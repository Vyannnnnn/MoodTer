<template>
  <div >
    <h2>Employee List</h2>
    <ul class="card">
      <li v-for="employee in employees" :key="employee._id">
        <h3>{{ employee.empjudul }}</h3>
        <p>Genre: {{ employee.empgenre }}</p>
        <iframe
          width="420"
          height="315"
          :src="employee.emplink"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      employees: []
    }
  },
  mounted() {
    this.fetchEmployees()
  },
  methods: {
    fetchEmployees() {
      axios
        .get('http://localhost:8000/emp')
        .then((response) => {
          this.employees = response.data
        })
        .catch((error) => {
          console.error('Error fetching employees:', error)
        })
    }
  },
 
}
</script>

<style>
.card{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: black;
  background-color: beige;
  padding: 5px;
}

</style>