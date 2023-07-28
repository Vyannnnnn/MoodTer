<template>
    <div>
      <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      <!-- my css -->
      <link rel="stylesheet" href="css/style.css" />
      <!-- bootstrap icon -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      <title>MoodTer</title>
    </head>
    <body id="home">
      <!-- navbar -->
      <nav class="navbar fixed-top">
        <div class="container-fluid d-flex justify-content-center">
          <span class="navbar-text">MoodTer</span>
        </div>
      </nav>
      <!-- end navbar -->
  
      <!-- button -->
      <section id="contact" class="video-section">
        <div class="video-container">
          <video id="myVideo" autoplay muted loop>
            <source src="img/bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="container pb-5 pt-5">
          <div class="row text-center mb-1">
            <div class="col">
              <h2>Find Music For Your Problems</h2>
            </div>
          </div>
          <div class="row text-center mb-3">
            <div class="col">
              <h4>Please Choose The One That Suits How You Feel Today</h4>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col md-7">
              <div class="d-grid gap-4 col-6 mx-auto">
                <button class="btn btn-light" role="checkbox" aria-checked="true" type="button" tabindex="0" onclick="window.location.href = '/reduce';">
                  <span>Reduce Stress</span>
                </button>
  
                <button class="btn btn-light" role="checkbox" aria-checked="true" type="button" tabindex="0" onclick="window.location.href = '/Improv';">
                  <span>Improve Focus</span>
                </button>
  
                <button class="btn btn-light" role="checkbox" aria-checked="true" type="button" tabindex="0" onclick="window.location.href = '/refresh';">
                  <span>Refresh Mood</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end button -->
  
    </body>
      
      <FooterApp/>
      <LaguCard/>
      <!-- <ReduceStress/> -->
      <!-- <div class="card ">
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
      </div> -->
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
  