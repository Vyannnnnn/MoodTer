<template>
    <div>
        
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <!-- my css -->
    <link rel="stylesheet" href="css/style2.css" />
    <!-- bootstrap icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
    <title>MoodTer</title>
  
  <body id="home">
    <!-- navbar -->
    <nav class="navbar fixed-top">
      <div class="container-fluid d-flex justify-content-center">
        <span class="navbar-text">MoodTer</span>
      </div>
    </nav>
    <!-- end navbar -->

    <!-- button -->
    
      <div class="image-container" style="background-image: url('img/pagi.jpg')">
        <section id="contact">
        <div class="container">
<div class="card ">
        <div v-for="employee in employees" :key="employee._id">
          <h3>{{ employee.empjudul }}</h3>
          <p>Genre: {{ employee.empgenre }}</p>
          <iframe
            width="420"
            height="315"
            :src="employee.emplink"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
          </div>
        </section>
        </div>
          
    <!-- end button -->

    <!-- footer -->
    <footer class="text-dark text-center fixed-bottom">
      <p>Created<i class="bi bi-heart-fill text-danger"></i> by <a href="https://instagram.com/andrealfiannn" class="text-black-50 fw-bold text-dark">Mahasiswa Underground</a></p>
    </footer>

    <!-- end footer -->
    
  </body>
    </div>
</template>

<script>
  import axios from 'axios'
  import LaguCard from '../components/LaguCard.vue'
  import FooterApp from '../components/FooterApp.vue'
  // import ReduceStress from './page/ReduceStress.vue';
  
  
  
  export default {
      component: {
          LaguCard,
          FooterApp,
          // ReduceStress
          
      },
      data() {
          return {
              employees: []
          };
      },
      mounted() {
          this.fetchEmployees();
      },
      methods: {
          fetchEmployees() {
              axios
                  .get('http://localhost:8000/emp')
                  .then((response) => {
                  this.employees = response.data;
              })
                  .catch((error) => {
                  console.error('Error fetching employees:', error);
              });
          }
      },
      components: { LaguCard,
      FooterApp }
  }
  </script>
  


