<template>

  <header>

      <nav class = "top-nav">

        <ul class = "top-nav__links">
          <li class = "top-nav__search"><RouterLink to="/">Search</RouterLink></li>
        </ul>

        <ul class="top-nav__links">
          <li class = "top-nav__learn"><RouterLink to="/">Learn</RouterLink></li>
          <li class = "top-nav__donate"><RouterLink to="/donate">Donate</RouterLink></li>
        </ul>

      </nav>

      <nav class = "bottom-nav">


        <router-link to = '/' class = "img-link"><img src="src/assets/good-things-foundation-logo.png" alt="GTF Logo"></router-link>

        <ul class = "bottom-nav__links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">What We Do</RouterLink></li>
          <li><RouterLink to="/digital-divide">The Digital Divide</RouterLink></li>
          <li><RouterLink to="/get-involved">Get Involved</RouterLink></li>
          <li><RouterLink to="/our-network">Our Network</RouterLink></li>
        </ul>

      </nav>


  </header>

</template>

<script setup>

import {RouterLink} from "vue-router";

</script>




<style lang ="scss" scoped>

@import "@/assets/base";



.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  border-bottom: 1px solid #d7d7d7;

  a {
    padding: 2rem 3rem;
  }


  &__donate a {
    background: $red;
    color: #fff;
    border-bottom: 3px solid $red;
  }

  &__learn a {
    border-bottom: 3px solid $green;
    border-left: 1px solid #d7d7d7;
  }

  &__search a {
    border-left: 1px solid #d7d7d7;
    border-right: 1px solid #d7d7d7;
  }
}

.bottom-nav{
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .img-link {
    padding-left: 0;
  }

  a {
    padding: 2rem 3rem;

    &:last-of-type {
      padding-right: 0;
    }
  }

  img {
    max-width: 300px;
  }
}



ul {
  display: flex;
  list-style: none;
}


.bottom-nav__links .router-link-exact-active {
  border-bottom: 2px solid $red;
}


</style>