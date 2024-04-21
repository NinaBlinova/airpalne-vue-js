<template>
  <div id="app">
    <fieldset>
      <legend>Airplane</legend>
      <div class="wrapper">
        <div>
          <div>
            <input type="radio" id="business" name="airplane" value="business" v-model="placesType.selectedAirplane"/>
            <label for="business">Business</label>
          </div>

          <div>
            <input type="radio" id="comfort" name="airplane" value="comfort" v-model="placesType.selectedAirplane"/>
            <label for="comfort">Comfort</label>
          </div>

          <div>
            <input type="radio" id="econom" name="airplane" value="econom" v-model="placesType.selectedAirplane"/>
            <label for="econom">Econom</label>
          </div>

          <div>
            <label for="amount">Amount to pay: </label>
            <input type="text" id="amount" name="amount" required minlength="1" size="7" v-model="placesType.amount"/>
          </div>

          <div>
            <label for="buy">You can buy: </label>
            <output name="buy" id="buy">{{ placesType.buy }}</output>
          </div>

          <button class="styled" @click="placesType.calculatePayment()"> Result</button>

        </div>
        <div>
          <div>
            <label for="model">Model of airplane: </label>
            <input type="text" id="model" name="model" v-model="airpalne.model" required minlength="1" size="10"/>
          </div>
          <div>
            <label for="wings">Wings: </label>
            <input type="text" id="wings" name="wings" v-model="airpalne.wings" required minlength="1" size="5"/>
          </div>
          <div>
            <label for="windows">Windows: </label>
            <input type="text" id="windows" name="windows" v-model="airpalne.windows" required minlength="1" size="5"/>
          </div>
          <div>
            <label for="doors">Doors: </label>
            <input type="text" id="doors" name="doors" v-model="airpalne.doors" required minlength="1" size="5"/>
          </div>
          <div>
            <label for="floors">Floors: </label>
            <input type="text" id="floors" name="floors" v-model="airpalne.floors" required minlength="1" size="5"/>
          </div>
          <div>
            <label for="places">Places: </label>
            <input type="text" id="places" name="places" v-model="airpalne.places" required minlength="1" size="5"/>
          </div>

        </div>

        <div>
          <div>
            <label for="destanation">Destanation: </label>
            <input type="text" id="destanation" name="destanation" v-model="airpalne.destanation" required minlength="1"
                   size="10"/>
          </div>

          <div>
            <form style="width: 200px">
              <label for="airplane">Airplane: </label>
              <output name="airplane" id="airplane" class="text">{{ airpalne.build() }}</output>
            </form>
          </div>

        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import {BusinessClass} from "@/Model/BusinessClass.js";
import {ComfortClass} from "@/Model/ComfortClass.js";
import {EconomClass} from "@/Model/EconomClass.js";
import {BuilderAirplane} from '@/Model/BuilderAirplane.js';
import {reactive} from "vue";

const business = new BusinessClass(1000);
const comfort = new ComfortClass(800);
const econom = new EconomClass(300);


const placesType = reactive({
  placesType: {
    selectedAirplane: 'business',
    amount: 1200,
    buy: ''
  }
})

const airpalne = reactive({
  airplane: {
    model: '',
    wings: 0,
    windows: 0,
    doors: 0,
    floors: 0,
    places: 0,
    selectedAirplane: 'business',
    destanation: ''
  }
})

placesType.calculatePayment = function () {
  if (this.selectedAirplane === 'business') {
    business.setNext(comfort);
    comfort.setNext(econom);
    this.buy = business.youCanPay(this.amount);
  } else if (this.selectedAirplane === 'comfort') {
    comfort.setNext(econom);
    this.buy = comfort.youCanPay(this.amount);
  } else {
    comfort.setNext(econom);
    this.buy = econom.youCanPay(this.amount);
  }
};


airpalne.build = function () {
  let Airplane = new BuilderAirplane(this.model);
  let a = Airplane.setEngines(4)
      .setWing(this.wings)
      .setTail(1)
      .setFuselage(1)
      .setChassis(4)
      .setWindows(this.windows)
      .setDoors(this.doors)
      .setFloors(this.doors)
      .Places()
      .addClass(this.selectedAirplane)
      .setDestanation(this.destanation)
      .build();
  return a;
}

</script>

<style scoped>
p,
label {
  font: 1rem 'Fira Sans',
  sans-serif;
}

input {
  margin: 0.2rem;
}

fieldset {
  width: 1000px;
  height: 500px;
}

.wrapper {
  display: flex;
  gap: 1rem; /* задаем расстояние между блоками */
}

.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(220 0 0 / 100%);
  background-image: linear-gradient(
      to top left,
      rgb(0 0 0 / 20%),
      rgb(0 0 0 / 20%) 30%,
      rgb(0 0 0 / 0%)
  );
  box-shadow: inset 2px 2px 3px rgb(255 255 255 / 60%),
  inset -2px -2px 3px rgb(0 0 0 / 60%);
}

.styled:hover {
  background-color: rgb(255 0 0 / 100%);
}

.styled:active {
  box-shadow: inset -2px -2px 3px rgb(255 255 255 / 60%),
  inset 2px 2px 3px rgb(0 0 0 / 60%);
}
</style>