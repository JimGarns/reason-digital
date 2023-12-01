<template>
  <main>

    <section class = "hero">

      <h1 class = "hero__heading">Get online week 2021</h1>
      <h3 class = "hero__sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </h3>
      <button class = "hero__btn btn btn--white">Get involved now! </button>

    </section>

    <section class="split">

      <div class="split__col split__col--left">
      </div>

      <div class="split__col split__col--right">

        <h2 class="split__heading">We are a social change charity, helping people to improve their lives through digital.</h2>
        <h3 class="split__sub">We tackle the most pressing issues of our time,
          working with partners in thousands of communities across the UK and further afield.
        </h3>

        <button class = 'split__btn btn btn--transparent'> Learn more about us</button>

      </div>

    </section>

    <section class="help">

      <div class="help__copy">
        <h2 class="help__heading">How can we help you?</h2>
        <h3 class="help__sub">Let us know who you are and what you're looking for, and we'll help you get to the right place.</h3>
      </div>

      <div class="help__menu">

        <p class = "help__query">I am an <select v-model = 'selected'><option v-for = 'option in store.firstOptions'>{{ option }}</option></select>
          and I want to
          <select v-model = 'secondSelected'><option v-for = 'option in store.secondOptions'>{{option}}</option></select>
        </p>

        <router-link v-bind:to="dynamicDestination"><button class="help__btn btn btn--red" @click = store.pager()>Start now</button></router-link>

      </div>

    </section>

    <section class="about">

      <div class="about__copy">
        <h2>What do we do?</h2>
        <p>You might not have heard of us, but we're the people behind the following impactful programmes:</p>
      </div>

      <div class="about__cards">

        <div class="about__card">
          <h2>Get online week</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <button class = "btn btn--card">Read More</button>
        </div>

        <div class="about__card">
          <h2>Learn my way</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <button class = "btn btn--card">Read More</button>
        </div>

        <div class="about__card">
          <h2>Make it click</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <button class = "btn btn--card">Read More</button>
        </div>

        <div class="about__card">
          <h2>Digital you</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <button class = "btn btn--card">Read More</button>
        </div>

      </div>

      <button class="about__btn btn btn--white">More about what we do</button>

    </section>

  </main>
</template>

<script setup>
import {useMainStore} from "@/stores/mainStore";
import {storeToRefs} from "pinia";

const store = useMainStore()
const {selected, secondSelected, dynamicDestination} = storeToRefs(store);


</script>

<style lang="scss" scoped>
@import "src/assets/base";

.hero {
  padding: 200px 100px;
  background-image: url("/src/assets/photo-1506905925346-21bda4d32df4.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__heading {
    padding: 2rem;
    display: inline-block;
    color: #fff;
    background: $blue;
    margin-bottom: 2rem;
  }

  &__sub {
    padding: 2rem;
    max-width: 600px;
    background: #fff;
    color: $green;
    margin-bottom: 2rem;
  }

}

.split {
  min-height: 400px;
  display: flex;

  &__col {
    width: 50%;

    &--left {
      background-image: url("/src/assets/photo-1501908734255-16579c18c25f.webp");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &--right {
      padding: 50px;
      background: $green;
      color: #fff;
    }

  }

  &__heading {

  }

  &__sub {
    margin: 3rem 0;
    font-weight: 500;

  }
}

.help {
  padding: 100px;
  background: whitesmoke;

  &__sub {
    margin: 2rem 0;
    font-weight: 300;
  }

  &__menu {
    background: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    margin-top: 4rem;
  }

  &__query {
    font-size: 4rem;
    margin-right: 3rem;
  }



}

.about {
  padding: 100px;
  background: $blue;
  color: #fff;
  display: flex;
  flex-direction: column;

  &__cards {
    display: flex;
    gap: 4rem;
    margin: 5rem 0;
  }

  &__card {
    text-align: center;
    flex: 1;
    padding: 3rem;
    background: #fff;
    color: black;
    border-radius: 5px;

    p {
      margin: 3rem;
    }
  }

  &__btn {
    align-self: center;

  }
}

select {
  border: none;
  font-size: 4rem;
  color: $green;
  text-align: center;
}



</style>
